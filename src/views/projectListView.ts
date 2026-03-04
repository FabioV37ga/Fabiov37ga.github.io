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
// Umbrella JS para seleção/manipulação DOM
import u from "umbrellajs";

// Importa a interface Elements do seletor
// Types/elements usados pela view da lista de projetos
import { Elements } from "../selectors/projectListSelector.js";

// Importa o tipo Project dos dados
// Tipo de dados Project contendo title, description, etc.
import { Project } from "../data/projects.js";

// Importa o template de item de projeto
// Template que renderiza um item de navegação/ projeto
import { nav_project } from "../templates/projectListTemplate.js";

// Importa animações da lista de projetos
// Animações específicas para a lista de projetos
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
        // Insere no DOM um novo item de projeto usando o template nav_project
        // nav_project() devolve um HTMLElement pronto para append
        this.elements.projectList.append(
            nav_project(project.title)
        )
    }


    // ---------------------------
    // 2.4. setContainerHeight - Define altura do container
    // ---------------------------

    setContainerHeight(height: string) {
        // Ajusta a altura do container para permitir animações de slide
        this.elements.projectContainer.style.height = `${height}`;
    }


    // ---------------------------
    // 2.5. showProjectContainer - Exibe container de projetos
    // ---------------------------

    showProjectContainer(delay: number) {
        // Dispara a animação que mostra o container de projetos com delay opcional
        projectListAnimations.slideDownProjectContainer.animation(
            this.elements.projectContainer,
            delay
        );
    }


    // ---------------------------
    // 2.6. showProjectItem - Exibe projeto com animação
    // ---------------------------

    showProjectItem(project: HTMLElement, delay: number) {
        // Anima a entrada de um item específico da lista
        projectListAnimations.showProjectItem.animation(project, delay)
    }


    // ---------------------------
    // 2.7. hideProjectItem - Oculta projeto com animação
    // ---------------------------

    hideProjectItem(project: HTMLElement, delay: number) {
        // Anima a saída/ocultação de um item individual
        projectListAnimations.hideProjectItem.animation(project, delay);

    }

    // ---------------------------
    // 2.8. hideProjectList - Oculta a lista de projetos
    // ---------------------------

    hideProjectList() {
        // Aciona animação que recolhe/oculta todo o container de projetos
        projectListAnimations.slideUpProjectContainer.animation(
            this.elements.projectContainer,
            600
        );
    }


    // ---------------------------
    // 2.9. highlightSelectedProject - Destaca projeto selecionado
    // ---------------------------

    highlightSelectedProject(project: HTMLElement) {

        // Marca o item como selecionado e garante visibilidade máxima
        u(project).addClass("selected-project");
        project.style.opacity = '1'

        // Remove possibilidade de hover e esconde outros itens
        for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {
            u(this.elements.projectItems[i]).removeClass("hoverable");
            if (this.elements.projectItems[i] !== project) {
                projectListAnimations.fadeOutProjectItem.animation(this.elements.projectItems[i]);
            }
        }

        // Centraliza e foca o projeto selecionado na lista
        projectListAnimations.focusOnProject.animation(this.elements.projectList);

        // Calcula posição alvo (offset) do projeto selecionado somando alturas anteriores
        var targetTop: number = 0;
        for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {
            if (this.elements.projectItems[i] === project)
                break
            targetTop += this.elements.projectItems[i].clientHeight + 10;
        }

        // Anima o destaque do projeto usando a posição calculada
        projectListAnimations.highlightProject.animation(project, targetTop);

        // Rola o container para reposicionar o projeto ao topo da visão
        projectListAnimations.resetScrollPosition.animation(this.elements.projectContainer);
    }

    blurSelectedProject(project: HTMLElement) {
        projectListAnimations.blurProject.animation(project);
    }
}

export default ProjectListView;