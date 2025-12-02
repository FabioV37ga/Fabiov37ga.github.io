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
 *    2.7. hideProjects() - Ocultação animada dos projetos
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
import AnimationCooldown from "../utils/animationCooldown.js";


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

    constructor(delay: number) {
        // Carrega os dados dos projetos
        this.projects = Projects;

        this.view.showProjectContainer()

        // Inicia a criação da lista de projetos
        this.createProjectList(delay);

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


        // Calcula e aplica o tempo da animação do container
        this.setListAnimationTime();
        
        // Define a altura inicial do container baseada nos itens
        this.setContainerHeight();


        // Aguarda 1.75s antes de iniciar a exibição dos projetos
        setTimeout(() => {
            this.showProjects();
        }, 1750);
    }

    // ---------------------------
    // 2.4. showProjects - Exibição animada dos projetos
    // ---------------------------

    showProjects() {

        // Índice inicial: último projeto (animação de baixo para cima)
        var projectIndex: number = this.elements.projectItems.length - 1;

        // Limite: para quando chegar ao primeiro item (índice 0)
        const limit: number = 0;

        // Intervalo que executa a cada 230ms
        const showInterval = setInterval(() => {
            // Mostra o projeto atual através da view
            this.view.showProjectItem(
                this.elements.projectItems[projectIndex]
            );

            // Decrementa o índice para o próximo projeto
            projectIndex--;

            // Verifica se todos os projetos foram exibidos
            if (projectIndex < limit) {
                // Para o intervalo quando terminar
                clearInterval(showInterval);
            }
        }, 230); // 230ms entre cada exibição
    }


    // ---------------------------
    // 2.5. setListAnimationTime - Cálculo do tempo de animação
    // ---------------------------

    setListAnimationTime() {
        AnimationCooldown.isOnCooldown = true;
        // Calcula: (quantidade de projetos × 230ms) + 2800ms de buffer
        AnimationCooldown.projectList = (this.projects.length * 230 + 2800);
        var time = AnimationCooldown.projectList;

        // Aplica a duração calculada na animação do container
        this.elements.projectContainer.style.animationDuration = time + "ms";

        setTimeout(() => {
            AnimationCooldown.isOnCooldown = false;
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
        this.view.setContainerHeight(totalHeight + "px");

        // Após a animação terminar, muda para altura responsiva (100%)
        setTimeout(() => {
            this.view.setContainerHeight("100%");
        }, AnimationCooldown.projectList); // Mesmo tempo da animação
    }


    // ---------------------------
    // 2.7. hideProjectList - Animação de saída dos projetos
    // ---------------------------

    static hideProjectList() {
        AnimationCooldown.isOnCooldown = true;
        const self = ProjectListController.instance;

        self.view.hideProjectList();

        var projectIndex: number = 0
        const limit: number = self.projects.length - 1;

        const hideInterval = setInterval(() => {
            self.view.hideProjectItem(
                self.elements.projectItems[projectIndex]
            );

            projectIndex++;

            if (projectIndex > limit) {
                clearInterval(hideInterval);
            }
        }, 230);

        setTimeout(() => {
            var projects = self.elements.projectItems;

            projects.forEach((project) => {
                u(project).removeClass("project-item-hide");
                u(project).removeClass("project-item-active");
                u(project).remove()
            });

            u(self.elements.projectContainer).removeClass("projects-container-hide");
            AnimationCooldown.isOnCooldown = false;
        }, self.projects.length * 230 + 2800);
    }
}

export default ProjectListController;