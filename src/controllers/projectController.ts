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
 *    2.3. setPosition() - Define a posição do display do projeto
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa os dados dos projetos e a interface Project
import { Projects, Project } from "../data/projects.js";

// Importa Umbrella JS para manipulação DOM
import u from "umbrellajs";
import { projectTemplate } from "../templates/projectTemplate.js";
import { ProjectSelector, Elements } from "../selectors/projectSelector.js";
import ProjectView from "../views/projectView.js";


// ---------------------------
// 2. CLASSE PROJECTCONTROLLER
// ---------------------------

class ProjectController {

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    elements: Elements = ProjectSelector.defineElements();
    view: ProjectView = new ProjectView(this.elements);


    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------

    constructor(project: Project, projectTitleElement: HTMLElement) {
        // Define a posição do display baseado no elemento de título
        this.setPosition(projectTitleElement);

        this.setProjectData(project)

        this.showProject(project)
    }


    // ---------------------------
    // 2.3. setPosition - Define a posição do display do projeto
    // ---------------------------

    setPosition(projectElement: HTMLElement) {
        // Obtém o primeiro elemento filho como referência
        var reference = u(projectElement).children().first() as HTMLElement;

        // Define estilos inline para posicionamento
        this.elements.projectContainer.style = `
        top: ${reference.offsetHeight + 55}px;
        display: flex;`

    }

    setProjectData(project: Project) {
        this.elements.projectContainer.append(projectTemplate(project))
    }

    showProject(project: Project) {
        this.elements = ProjectSelector.defineElements();

        this.view.showProject(this.elements, project);
    }
}

export default ProjectController;