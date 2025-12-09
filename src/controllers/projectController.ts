/**
 * ============================================================================
 * PROJECT CONTROLLER
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe ProjectController
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. addHandlers() - Adiciona eventos aos botões
 *    2.4. setPosition() - Define a posição do display do projeto
 *    2.5. setProjectData() - Insere o template do projeto no DOM
 *    2.6. showProject() - Exibe o projeto com animações
 *    2.7. hideProject() - Oculta o projeto
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa os dados dos projetos e a interface Project
import { Project } from "../data/projects.js";

// Importa Umbrella JS para manipulação DOM
import u from "umbrellajs";

// Importa o template de exibição de projeto
import { projectTemplate } from "../templates/projectTemplate.js";

// Importa o seletor de elementos e a interface Elements
import { ProjectSelector, Elements } from "../selectors/projectSelector.js";

// Importa a view responsável pela renderização
import ProjectView from "../views/projectView.js";
import ProjectListController from "./projectListController.js";

import ProjectDisplayAnimations from "../utils/projectDisplayAnimations.js";


// ---------------------------
// 2. CLASSE PROJECTCONTROLLER
// ---------------------------

class ProjectController {

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    // Elementos DOM do display de projeto
    elements: Elements = ProjectSelector.defineElements();

    // Instância da view para renderização e manipulação visual
    view: ProjectView = new ProjectView(this.elements);

    static instance: ProjectController;


    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------

    constructor(project: Project, projectTitleElement: HTMLElement) {
        ProjectController.instance = this;
        // Define a posição do display baseado no elemento de título
        this.setPosition(projectTitleElement);

        // Insere o template do projeto no DOM
        this.setProjectData(project)

        // Exibe o projeto com animações
        this.showProject(project)
    }


    // ---------------------------
    // 2.3. addHandlers - Adiciona eventos aos botões
    // ---------------------------

    addHandlers() {
        // Obtém referência ao botão de retorno
        var returnBtn = this.elements.returnButton;

        // Adiciona evento de clique ao botão de retorno
        u(returnBtn).on('click', async () => {
            // Remove o listener para evitar múltiplos disparos
            u(returnBtn).off('click');
            // Oculta o projeto e retorna à lista
            this.hideProject("projectController");
        })

    }


    // ---------------------------
    // 2.4. setPosition - Define a posição do display do projeto
    // ---------------------------

    setPosition(projectElement: HTMLElement) {
        // Obtém o primeiro elemento filho como referência
        var reference = u(projectElement).children().first() as HTMLElement;

        // Define estilos inline para posicionamento
        this.elements.projectContainer.style = `
        top: ${reference.offsetHeight + 55}px;
        display: flex;`

    }

    // ---------------------------
    // 2.5. setProjectData - Insere o template do projeto no DOM
    // ---------------------------

    setProjectData(project: Project) {
        // Renderiza e adiciona o template do projeto ao container
        this.elements.projectContainer.append(
            projectTemplate(project)
        )
    }


    // ---------------------------
    // 2.6. showProject - Exibe o projeto com animações
    // ---------------------------

    async showProject(project: Project) {
        // Atualiza os elementos DOM após inserção do template
        this.elements = ProjectSelector.defineElements();

        // Exibe o projeto através da view com animações
        this.view.showProject(this.elements, project);

        // Adiciona os event handlers aos botões
        this.addHandlers();
    }


    // ---------------------------
    // 2.7. hideProject - Oculta o projeto
    // ---------------------------

    async hideProject(origin: string) {
        // Executa animação de ocultação do projeto através da view
        this.view.hideProject(this.elements.projectContainer);

        // Aguarda o término das animações (1000ms)

        ProjectDisplayAnimations.delay.animation(
            this.elements.projectContainer,
            200 * 5
        );

        await ProjectDisplayAnimations.check(
            () => ProjectDisplayAnimations.delay.isPlaying
        );

        // Remove foco do projeto selecionado na lista
        ProjectListController.blurSelectedProject(origin);

    }
}

export default ProjectController;