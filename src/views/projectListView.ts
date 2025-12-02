/**
 * ============================================================================
 * PROJECT LIST VIEW
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe ProjectListView
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. appendProjectItem() - Adiciona item de projeto à lista
 *    2.4. setContainerHeight() - Define altura do container
 *    2.5. showProject() - Exibe projeto com animação
 *    2.6. hideProject() - Oculta projeto com animação
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa Umbrella JS para manipulação DOM
import u from "umbrellajs";

// Importa a interface Elements do seletor
import { Elements } from "../selectors/projectListSelector.js";

// Importa o tipo Project dos dados
import { Project } from "../data/projects.js";

// Importa o template de item de projeto
import { nav_project } from "../templates/projectListTemplate.js";


// ---------------------------
// 2. CLASSE PROJECTLISTVIEW
// ---------------------------

class ProjectListView {
    
    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------
    
    // Elementos DOM da lista de projetos
    elements: Elements

    
    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    
    constructor(elements: Elements) {
        // Armazena os elementos DOM passados como parâmetro
        this.elements = elements;
    }

    
    // ---------------------------
    // 2.3. appendProjectItem - Adiciona item de projeto à lista
    // ---------------------------
    
    appendProjectItem(project: Project) {
        // Adiciona o item de projeto renderizado à lista
        // nav_project() retorna um HTMLElement criado pelo template
        this.elements.projectList.append(
            nav_project(project.title)
        )
    }

    
    // ---------------------------
    // 2.4. setContainerHeight - Define altura do container
    // ---------------------------
    
    setContainerHeight(height: string) {
        // Define a altura do container de projetos via CSS inline
        this.elements.projectContainer.style.height = `${height}`;
    }

    
    // ---------------------------
    // 2.5. showProjectItem - Exibe projeto com animação
    // ---------------------------
    
    showProjectContainer() {
        u(this.elements.projectContainer).addClass("projects-container-show");
    }

    showProjectItem(project: HTMLElement) {
        // Adiciona a classe de ativação para exibir o projeto
        u(project).addClass("project-item-active");
    }

    
    // ---------------------------
    // 2.6. hideProject - Oculta projeto com animação
    // ---------------------------
    
    hideProjectItem(project: HTMLElement) {
        // Adiciona a classe de ocultação para esconder o projeto
        u(project).addClass("project-item-hide");
    }

    hideProjectList(){
        u(this.elements.projectContainer).removeClass("projects-container-show");
        u(this.elements.projectContainer).addClass("projects-container-hide");
    }
}

export default ProjectListView;