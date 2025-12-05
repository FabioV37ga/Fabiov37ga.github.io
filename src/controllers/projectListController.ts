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

// Importa a classe de controle de cooldown de animações
import AnimationCooldown from "../utils/animationCooldown.js";

import ProjectController from "./projectController.js";


// ---------------------------
// 2. CLASSE PROJECTLISTCONTROLLER
// ---------------------------

class ProjectListController {

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    static instance: ProjectListController;

    // Array contendo todos os projetos
    projects: Project[]

    // Elementos DOM selecionados (container, lista, itens)
    elements: Elements = ProjectListSelector.defineElements();

    // Instância da view para manipulação visual
    view: ProjectListView = new ProjectListView(this.elements);



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

    createProjectList(delay: number) {
        // Itera sobre cada projeto no array
        this.projects.forEach((project) => {
            // Adiciona o item do projeto no DOM através da view
            this.view.appendProjectItem(project);
        });

        // Atualiza os elementos DOM após a inserção dos itens
        this.elements = ProjectListSelector.defineElements();

        // Atualiza os elementos na view também
        this.view.elements = this.elements;

        // Calcula e aplica o tempo da animação do container
        this.setListAnimationTime();

        // Define a altura inicial do container baseada nos itens
        this.setContainerHeight();

        // Aguarda 1.75s antes de iniciar a exibição dos projetos
        setTimeout(() => {
            this.showProjects();
        }, delay);
    }

    // ---------------------------
    // 2.4. showProjects - Exibição animada dos projetos
    // ---------------------------

    showProjects() {

        // Índice inicial: último projeto (animação de baixo para cima)
        var projectIndex: number = this.elements.projectItems.length - 1;

        var delay: number = 0

        for (let i = 0; i < this.elements.projectItems.length; i++) {
            this.view.showProjectItem(
                this.elements.projectItems[projectIndex],
                delay
            );
            projectIndex--;
            delay += 230
        }

        setTimeout(() => {
            this.addHandlers()
        }, delay);
    }


    // ---------------------------
    // 2.5. setListAnimationTime - Cálculo do tempo de animação
    // ---------------------------

    setListAnimationTime() {
        // Ativa o cooldown da lista de projetos
        AnimationCooldown.projectListCooldown = true;

        // Calcula: (quantidade de projetos × 230ms) + 2800ms de buffer
        AnimationCooldown.projectList = (this.projects.length * 230 + 500);
        var time = AnimationCooldown.projectList;

        // Aplica a duração calculada na animação do container
        // this.elements.projectContainer.style.animationDuration = time + "ms";

        // Desativa o cooldown após o tempo da animação
        setTimeout(() => {
            AnimationCooldown.projectListCooldown = false;
        }, AnimationCooldown.projectList);
    }


    // ---------------------------
    // 2.6. setContainerHeight - Ajuste da altura do container
    // ---------------------------

    setContainerHeight() {
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
        setTimeout(() => {
            this.view.setContainerHeight("100%");
        }, AnimationCooldown.projectList + 3500); // Mesmo tempo da animação

        // Obtém o último item da lista
        const lastItem = u(this.elements.projectItems).last() as HTMLElement;

        // Define margem inferior no último item se existir
        if (lastItem) {
            lastItem.style.marginBottom = "55px";
        }
    }


    // ---------------------------
    // 2.7. hideProjectList - Animação de saída dos projetos
    // ---------------------------

    static hideProjectList() {
        // Ativa o cooldown da lista de projetos
        AnimationCooldown.projectListCooldown = true;

        // Obtém a instância estática do controller
        const self = ProjectListController.instance;

        // Oculta a lista de projetos visualmente
        self.view.hideProjectList();

        // Índice inicial do primeiro projeto
        var projectIndex: number = 0

        // Limite: último projeto do array
        const limit: number = self.projects.length - 1;

        // Intervalo que oculta cada projeto a cada 230ms
        const hideInterval = setInterval(() => {

            // Oculta o projeto atual
            self.view.hideProjectItem(
                self.elements.projectItems[projectIndex],
                "pop"
            );

            // Incrementa para o próximo projeto
            projectIndex++;

            // Verifica se todos foram ocultados
            if (projectIndex > limit) {
                // Para o intervalo
                clearInterval(hideInterval);
            }
        }, 200);

        // Após todas as animações, limpa o DOM
        setTimeout(() => {
            // Obtém todos os projetos
            var projects = self.elements.projectItems;

            // Remove classes e elementos do DOM
            projects.forEach((project) => {

                // Remove o elemento do DOM
                u(project).remove()
            });


            // Desativa o cooldown
            AnimationCooldown.projectListCooldown = false;
        }, self.projects.length * 230 + 2800);
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
                        // TODO: Exibir conteúdo do projeto
                        // this.showProjectContent(this.projects[i]);
                        break;
                    }
                }
            })
        })
    }


    // ---------------------------
    // 2.9. selectProject - Seleciona um projeto
    // ---------------------------

    selectProject(project: HTMLElement) {
        if (!u(project).hasClass("selected-project")) {

            // Verifica se não está em cooldown de foco de projeto
            if (AnimationCooldown.projectFocusCooldown == false) {
                // Ativa o cooldown
                AnimationCooldown.projectFocusCooldown = true;

                // Destaca o projeto selecionado visualmente
                this.view.highlightSelectedProject(project);
            }

            // Aguarda o tempo da animação de foco
            setTimeout(() => {
                // Desativa o cooldown*
                AnimationCooldown.projectFocusCooldown = false;

                // Variável para armazenar o elemento do projeto selecionado
                let selectedProjectElement: HTMLElement | undefined;

                // Busca o projeto selecionado no array de elementos
                for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {
                    // Verifica se é o projeto clicado
                    if (this.elements.projectItems[i] == project) {
                        // Armazena o elemento do projeto
                        selectedProjectElement = this.elements.projectItems[i];
                        break;
                    }
                }

                // Variável para armazenar os dados do projeto
                let selectedProject: Project | undefined;

                // Busca os dados do projeto correspondente
                for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {
                    if (project.textContent?.trim() ===
                        Projects[i].title
                    ) {
                        selectedProject = Projects[i];
                        break;
                    }
                }

                // Exibe o conteúdo se ambos foram encontrados
                if (selectedProject && selectedProjectElement) {
                    setTimeout(() => {
                        this.showProjectContent(
                            selectedProject,
                            selectedProjectElement
                        );
                    }, 500);
                }

            }, AnimationCooldown.projectFocus);
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

    static blurSelectedProject(project?: HTMLElement) {
        const self = ProjectListController.instance;

        var selectedProject: HTMLElement;

        self.elements.projectItems.forEach(element => {
            if (u(element).hasClass("selected-project")) {
                selectedProject = element;
            }
        });

        self.view.blurSelectedProject(selectedProject!);



        setTimeout(() => {
            self.elements.projectItems.forEach(element => {
                u(element).remove()
            })

            new ProjectListController(0)
        }, 200);

    }
}

export default ProjectListController;