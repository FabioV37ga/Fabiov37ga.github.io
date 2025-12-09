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
 *    2.5. showProjectContainer() - Exibe container de projetos
 *    2.6. showProjectItem() - Exibe projeto com animação
 *    2.7. hideProjectItem() - Oculta projeto com animação
 *    2.8. hideProjectList() - Oculta a lista de projetos
 *    2.9. highlightSelectedProject() - Destaca projeto selecionado
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

// Importa animações da lista de projetos
import projectListAnimations from "../utils/projectListAnimations.js";


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
    // 2.5. showProjectContainer - Exibe container de projetos
    // ---------------------------

    showProjectContainer(delay: number) {
        // Anima a exibição do container de projetos
        projectListAnimations.slideDownProjectContainer.animation(
            this.elements.projectContainer,
            // ProjectListController.setListAnimationTime(),
            delay
        );
    }


    // ---------------------------
    // 2.6. showProjectItem - Exibe projeto com animação
    // ---------------------------

    showProjectItem(project: HTMLElement, delay: number) {
        // Chama a função de animação para exibir o item de projeto
        projectListAnimations.showProjectItem.animation(project, delay)
    }


    // ---------------------------
    // 2.7. hideProjectItem - Oculta projeto com animação
    // ---------------------------

    hideProjectItem(project: HTMLElement, delay: number) {
        // Chama a função de animação para ocultar o item de projeto

        projectListAnimations.hideProjectItem.animation(project, delay);

    }

    // ---------------------------
    // 2.8. hideProjectList - Oculta a lista de projetos
    // ---------------------------

    hideProjectList() {
        // Adiciona a classe de ocultação
        projectListAnimations.slideUpProjectContainer.animation(
            this.elements.projectContainer,
            600
        );
    }


    // ---------------------------
    // 2.9. highlightSelectedProject - Destaca projeto selecionado
    // ---------------------------

    highlightSelectedProject(project: HTMLElement) {

        // Adiciona a classe de projeto selecionado ao item
        u(project).addClass("selected-project");

        // Define opacidade total para o projeto selecionado
        project.style.opacity = '1'

        // Itera sobre todos os itens de projeto
        for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {

            // Remove a classe de hover de todos os itens
            u(this.elements.projectItems[i]).removeClass("hoverable");

            // Oculta todos os itens exceto o selecionado
            if (this.elements.projectItems[i] !== project) {
                projectListAnimations.fadeOutProjectItem.animation(this.elements.projectItems[i]);
            }
        }

        // Centraliza o projeto selecionado na visão
        projectListAnimations.focusOnProject.animation(this.elements.projectList);


        // Variável para acumular a posição de destino
        var targetTop: number = 0;

        // Calcula a distância até o projeto selecionado
        for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {
            // Para quando encontrar o projeto selecionado
            if (this.elements.projectItems[i] === project)
                break

            // Soma a altura do item + margem (10px)
            targetTop += this.elements.projectItems[i].clientHeight + 10;
        }

        // Chama a função de animação para destacar o projeto
        projectListAnimations.highlightProject.animation(project, targetTop);

        // Anima o scroll do container para o topo
        projectListAnimations.resetScrollPosition.animation(this.elements.projectContainer);
    }

    blurSelectedProject(project: HTMLElement) {
        projectListAnimations.blurProject.animation(project);
    }
}

export default ProjectListView;