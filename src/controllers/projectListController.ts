/**
 * ============================================================================
 * PROJECT LIST CONTROLLER
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe ProjectListController
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. createProjectList() - Criação da lista de projetos
 *    2.4. showProjects() - Exibição animada dos projetos
 *    2.5. setListAnimationTime() - Cálculo do tempo de animação
 *    2.6. setContainerHeight() - Ajuste da altura do container
 *    2.7. hideProjectList() - Animação de saída dos projetos
 *    2.8. addHandlers() - Adiciona os event handlers
 *    2.9. selectProject() - Seleciona um projeto
 *    2.10. showProjectContent() - Exibe o conteúdo do projeto selecionado
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

import u from "umbrellajs";

// Importa os dados dos projetos e a interface Project
import { Projects, Project } from "../data/projects.js";

// Importa o seletor de elementos e a interface Elements
import { ProjectListSelector, Elements } from "../selectors/projectListSelector.js";

// Importa a view responsável pela renderização
import ProjectListView from "../views/projectListView.js";

import ProjectController from "./projectController.js";
import projectListAnimations from "../utils/projectListAnimations.js";


// ---------------------------
// 2. CLASSE PROJECTLISTCONTROLLER
// ---------------------------

class ProjectListController {

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    // Instância estática para acesso global ao controller
    static instance: ProjectListController;

    // Array contendo todos os dados dos projetos
    projects: Project[]

    // Elementos DOM selecionados (container, lista, itens)
    elements: Elements = ProjectListSelector.defineElements();

    // Instância da view para renderização e manipulação visual
    view: ProjectListView = new ProjectListView(this.elements);

    static hasHighlightedProject: boolean = false;

    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------

    constructor(delay?: number) {
        // Carrega os dados dos projetos
        this.projects = Projects;

        // Inicia a criação da lista de projetos
        this.createProjectList(delay || 0);

        this.view.showProjectContainer(delay!)

        // Atribui a instância atual para acesso estático
        ProjectListController.instance = this;
    }


    // ---------------------------
    // 2.3. createProjectList - Criação da lista de projetos
    // ---------------------------

    async createProjectList(delay: number) {
        // Itera sobre cada projeto e adiciona ao DOM
        this.projects.forEach((project) => {
            this.view.appendProjectItem(project);
        });

        // Atualiza elementos DOM após inserção dos itens
        this.elements = ProjectListSelector.defineElements();

        // Sincroniza elementos na view 
        this.view.elements = this.elements;

        // Define altura inicial do container
        this.setContainerHeight(delay);

        ProjectListController.instance = this
        // Exibe os projetos com animação sequencial
        this.showProjects(delay);

    }

    // ---------------------------
    // 2.4. showProjects - Exibição animada dos projetos
    // ---------------------------

    async showProjects(animationDelay: number) {

        // Índice inicial: último projeto (animação de baixo para cima)
        var projectIndex: number = this.elements.projectItems.length - 1;

        // Delay acumulado entre animações
        var delay: number = animationDelay

        // Exibe cada projeto com delay incremental (230ms entre cada)
        for (let i = 0; i < this.elements.projectItems.length; i++) {
            this.view.showProjectItem(
                this.elements.projectItems[projectIndex],
                delay
            );
            projectIndex--;
            delay += 230;
        }

        // Aguarda todas as animações finalizarem
        
        await projectListAnimations.check(
            () => projectListAnimations.slideDownProjectContainer.isPlaying
        )

        // Adiciona event handlers aos projetos
        this.addHandlers()
    }


    // ---------------------------
    // 2.5. getListAnimationTime - Cálculo do tempo de animação
    // ---------------------------

    static getListAnimationTime(): number {
    
        var self = ProjectListController.instance;
        // Calcula: (quantidade de projetos × 230ms) + 2800ms de buffer
        return self.projects.length * 230 + 500;
    }


    // ---------------------------
    // 2.6. setContainerHeight - Ajuste da altura do container
    // ---------------------------

    async setContainerHeight(delay: number) {
        // Obtém todos os elementos filhos (itens de projeto)
        const childrenElements: HTMLElement[] = this.elements.projectItems;

        // Variável para acumular a altura total
        let totalHeight: number = 0;

        // Itera sobre cada elemento filho
        childrenElements.forEach((element) => {
            // Soma a altura do elemento + 100px de margem
            totalHeight += element.offsetHeight + 20;
        });

        // Define a altura inicial do container (altura exata dos itens)
        this.view.setContainerHeight(totalHeight + 55 + "px");

        // Após a animação terminar, muda para altura responsiva (100%)
        await projectListAnimations.check(
            () => projectListAnimations.slideDownProjectContainer.isPlaying)

        this.view.setContainerHeight("100%");

        // Obtém o último item da lista
        const lastItem = u(this.elements.projectItems).last() as HTMLElement;

        // Define margem inferior no último item se existir
        lastItem.style.marginBottom = "55px";

    }


    // ---------------------------
    // 2.7. hideProjectList - Animação de saída dos projetos
    // ---------------------------

    static async hideProjectList() {
        // Ativa o cooldown da lista de projetos
        projectListAnimations.slideDownProjectContainer.isPlaying = true;

        // Obtém a instância estática do controller
        const self = ProjectListController.instance;

        self.setContainerHeight(0)

        // Oculta a lista de projetos visualmente
        self.view.hideProjectList();

        var delay: number = 0;
        self.elements.projectItems.forEach((project) => {
            self.view.hideProjectItem(project, delay);
            delay += 200;
        })

        // Aguarda o término das animações antes de prosseguir
        await projectListAnimations.check(
            () => projectListAnimations.slideUpProjectContainer.isPlaying)

        // Obtém todos os projetos
        var projects = self.elements.projectItems;

        // Remove classes e elementos do DOM
        projects.forEach((project) => {
            // Remove o elemento do DOM
            u(project).remove()
        });

        // Desativa o cooldown
        projectListAnimations.slideDownProjectContainer.isPlaying = false;
    }

    // ---------------------------
    // 2.8. addHandlers - Adiciona os event handlers
    // ---------------------------

    addHandlers() {
        // Obtém todos os itens de projeto
        const projectItems = this.elements.projectItems;

        // Itera sobre cada item de projeto
        projectItems.forEach((project) => {

            // Adiciona evento de clique ao projeto
            u(project).on("click", (event: Event) => {

                // Obtém o título do projeto clicado
                const titulo: string = u(event.currentTarget as HTMLElement).text();

                // Busca o projeto correspondente no array de dados
                for (let i = 0; i < projectItems.length; i++) {
                    // Verifica se o título corresponde ao projeto atual
                    if (titulo === this.projects[i].title) {
                        // Seleciona o projeto clicado
                        this.selectProject(event.currentTarget as HTMLElement);
                        break;
                    }
                }
            })
        })
    }


    // ---------------------------
    // 2.9. selectProject - Seleciona um projeto
    // ---------------------------

    async selectProject(project: HTMLElement) {
        if (!u(project).hasClass("selected-project") && ProjectListController.hasHighlightedProject == false) {

            // Verifica se não está em cooldown de foco de projeto
            if (projectListAnimations.focusOnProject.isPlaying === false) {
                // Destaca o projeto selecionado visualmente
                this.view.highlightSelectedProject(project);
                ProjectListController.hasHighlightedProject = true;
            }


            // Aguarda o tempo da animação de ocultação
            await projectListAnimations.check(
                () => projectListAnimations.focusOnProject.isPlaying
            )

            // Variável para armazenar o elemento HTML do projeto selecionado
            let selectedProjectElement: HTMLElement;

            // Busca o projeto selecionado no array de elementos
            for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {
                // Verifica se é o projeto clicado
                if (this.elements.projectItems[i] == project) {
                    // Armazena o elemento do projeto
                    selectedProjectElement = this.elements.projectItems[i];
                    break;
                }
            }

            // Variável para armazenar os dados completos do projeto
            let selectedProject: Project;

            // Busca os dados do projeto pelo título
            for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {
                if (project.textContent?.trim() === Projects[i].title) {
                    selectedProject = Projects[i];
                    break;
                }
            }

            // Aguarda delay antes de exibir conteúdo
            await projectListAnimations.check(
                () => projectListAnimations.highlightProject.isPlaying
            )

            // Exibe conteúdo se ambos os elementos foram encontrados
            if (selectedProject! && selectedProjectElement!) {
                this.showProjectContent(
                    selectedProject,
                    selectedProjectElement
                );
            }
        }

    }


    // ---------------------------
    // 2.10. showProjectContent - Exibe o conteúdo do projeto selecionado
    // ---------------------------

    showProjectContent(project: Project, projectTitleElement: HTMLElement) {

        // Cria uma nova instância do controller de projeto
        new ProjectController(
            project, // Dados do projeto
            projectTitleElement // Elemento HTML do título
        );
    }

    static async blurSelectedProject(origin: string) {
        // Obtém instância do controller
        const self = ProjectListController.instance;

        // Variável para armazenar projeto selecionado
        var selectedProject: HTMLElement;

        // Busca o projeto com classe de seleção
        self.elements.projectItems.forEach(element => {
            if (u(element).hasClass("selected-project")) {
                selectedProject = element;
            }
        });

        // Executa animação de desfoque no projeto
        self.view.blurSelectedProject(selectedProject!);

        // Aguarda animação de desfoque
        await projectListAnimations.check(
            () => projectListAnimations.blurProject.isPlaying
        )

        // Remove todos os itens do DOM
        self.elements.projectItems.forEach(element => {
            u(element).remove()
        })

        ProjectListController.hasHighlightedProject = false;
        // Recria lista de projetos sem delay
        if (origin == "projectController")
            new ProjectListController(0)

    }
}

export default ProjectListController;