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
 *    2.11. blurSelectedProject() - Desfoca e remove projeto selecionado
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
// Importa o seletor que localiza elementos da lista de projetos e a interface Elements
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

    // Instância estática (singleton) para acesso global ao controller
    static instance: ProjectListController;

    // Array contendo todos os dados dos projetos (carregado a partir de Projects)
    projects: Project[]

    // Elementos DOM selecionados (container, lista, itens)
    elements: Elements = ProjectListSelector.defineElements();

    // Instância da view que manipula a renderização e animações da lista
    view: ProjectListView = new ProjectListView(this.elements);

    // Flag que indica se existe um projeto atualmente destacado
    static hasHighlightedProject: boolean = false;

    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------

    constructor(delay?: number) {
        // Carrega os dados dos projetos na instância
        this.projects = Projects;

        // Cria os elementos da lista no DOM com um delay inicial opcional
        this.createProjectList(delay || 0);

        // Mostra o container que envolve a lista (pode ter animação)
        this.view.showProjectContainer(delay!)

        // Registra a instância atual para acesso global
        ProjectListController.instance = this;
    }


    // ---------------------------
    // 2.3. createProjectList - Criação da lista de projetos
    // ---------------------------

    async createProjectList(delay: number) {
        // Itera sobre os dados e injeta cada item de projeto no DOM via view
        this.projects.forEach((project) => {
            this.view.appendProjectItem(project);
        });

        // Recalcula referências aos elementos recém-inseridos
        this.elements = ProjectListSelector.defineElements();

        // Atualiza a referência de elementos usada pela view
        this.view.elements = this.elements;

        // Calcula e aplica a altura inicial do container para a animação
        this.setContainerHeight(delay);

        // Garante acesso à instância atual e inicia a sequência de exibição
        ProjectListController.instance = this
        this.showProjects(delay);

    }

    // ---------------------------
    // 2.4. showProjects - Exibição animada dos projetos
    // ---------------------------

    async showProjects(animationDelay: number) {

        // Começa exibindo do último ao primeiro para um efeito de subida
        var projectIndex: number = this.elements.projectItems.length - 1;

        // Delay acumulado entre cada item para sequência visual
        var delay: number = animationDelay

        // Loop que dispara a animação de cada item com atraso crescente
        for (let i = 0; i < this.elements.projectItems.length; i++) {
            this.view.showProjectItem(
                this.elements.projectItems[projectIndex],
                delay
            );
            projectIndex--;
            delay += 230;
        }

        // Aguarda até que a animação principal do container termine
        await projectListAnimations.check(
            () => projectListAnimations.slideDownProjectContainer.isPlaying
        )

        // Após animações, anexa os handlers de interação aos itens
        this.addHandlers()
    }


    // ---------------------------
    // 2.5. getListAnimationTime - Cálculo do tempo de animação
    // ---------------------------

    static getListAnimationTime(): number {

        // Retorna uma estimativa do tempo total da animação da lista
        var self = ProjectListController.instance;
        return self.projects.length * 230 + 500;
    }


    // ---------------------------
    // 2.6. setContainerHeight - Ajuste da altura do container
    // ---------------------------

    async setContainerHeight(delay: number) {
        // Recolhe todos os itens para calcular altura total necessária
        const childrenElements: HTMLElement[] = this.elements.projectItems;

        // Acumula altura dos itens (inclui margem/padding extra)
        let totalHeight: number = 0;
        childrenElements.forEach((element) => {
            totalHeight += element.offsetHeight + 20;
        });

        // Aplica altura fixa inicial para permitir animação de slide
        this.view.setContainerHeight(totalHeight + 55 + "px");

        // Aguarda a animação do container para então tornar a altura responsiva
        await projectListAnimations.check(
            () => projectListAnimations.slideDownProjectContainer.isPlaying)

        this.view.setContainerHeight("100%");

        // Ajusta margem inferior do último item para espaçamento final
        const lastItem = u(this.elements.projectItems).last() as HTMLElement;
        lastItem.style.marginBottom = "55px";

    }


    // ---------------------------
    // 2.7. hideProjectList - Animação de saída dos projetos
    // ---------------------------

    static async hideProjectList() {
        // Coloca a lista em modo de cooldown para evitar reentrância
        projectListAnimations.slideDownProjectContainer.isPlaying = true;

        // Referência à instância atual
        const self = ProjectListController.instance;

        // Ajusta a altura do container para colapsar
        self.setContainerHeight(0)

        // Inicia animação de ocultação do container
        self.view.hideProjectList();

        // Anima cada item em sequência para saída visual
        var delay: number = 0;
        self.elements.projectItems.forEach((project) => {
            self.view.hideProjectItem(project, delay);
            delay += 200;
        })

        // Aguarda até que a animação de subida termine
        await projectListAnimations.check(
            () => projectListAnimations.slideUpProjectContainer.isPlaying)

        // Remove elementos do DOM após animação
        var projects = self.elements.projectItems;
        projects.forEach((project) => {
            u(project).remove()
        });

        // Libera o cooldown
        projectListAnimations.slideDownProjectContainer.isPlaying = false;
    }

    // ---------------------------
    // 2.8. addHandlers - Adiciona os event handlers
    // ---------------------------

    addHandlers() {
        // Obtém referência aos elementos dos itens de projeto
        const projectItems = this.elements.projectItems;

        // Associa handler de clique a cada item para seleção
        projectItems.forEach((project) => {
            u(project).on("click", (event: Event) => {
                // Ignora clicks enquanto a animação de subida estiver ativa
                if (!projectListAnimations.slideUpProjectContainer.isPlaying) {

                    // Recupera o texto do título clicado para mapear ao dado
                    const titulo: string = u(event.currentTarget as HTMLElement).text();

                    // Procura o índice do projeto com título correspondente
                    for (let i = 0; i < projectItems.length; i++) {
                        if (titulo === this.projects[i].title) {
                            // Dispara seleção do projeto encontrado
                            this.selectProject(event.currentTarget as HTMLElement);
                            break;
                        }
                    }
                }
            })
        })
    }


    // ---------------------------
    // 2.9. selectProject - Seleciona um projeto
    // ---------------------------

    async selectProject(project: HTMLElement) {
        // Só procede se o projeto não estiver já selecionado e não houver destaque ativo
        if (!u(project).hasClass("selected-project") && ProjectListController.hasHighlightedProject == false) {

            // Se não houver cooldown em foco, destaca o projeto visualmente
            if (projectListAnimations.focusOnProject.isPlaying === false) {
                this.view.highlightSelectedProject(project);
                ProjectListController.hasHighlightedProject = true;
            }

            // Aguarda término da animação que cria o foco no projeto
            await projectListAnimations.check(
                () => projectListAnimations.focusOnProject.isPlaying
            )

            // Encontra o elemento HTML correspondente ao projeto clicado
            let selectedProjectElement: HTMLElement;
            for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {
                if (this.elements.projectItems[i] == project) {
                    selectedProjectElement = this.elements.projectItems[i];
                    break;
                }
            }

            // Localiza os dados completos do projeto a partir do título
            let selectedProject: Project;
            for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {
                if (project.textContent?.trim() === Projects[i].title) {
                    selectedProject = Projects[i];
                    break;
                }
            }

            // Aguarda a animação de destaque terminar antes de abrir o conteúdo
            await projectListAnimations.check(
                () => projectListAnimations.highlightProject.isPlaying
            )

            // Se ambos elemento e dado foram encontrados, abre o display do projeto
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

    // ---------------------------
    // 2.11. blurSelectedProject - Desfoca e remove projeto selecionado
    // ---------------------------

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

        // Reseta a flag de projeto destacado
        ProjectListController.hasHighlightedProject = false;

        // Recria lista de projetos sem delay se a origem for projectController
        if (origin == "projectController")
            new ProjectListController(0)

    }
}

export default ProjectListController;