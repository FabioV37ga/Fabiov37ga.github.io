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

// Importa Anime.js para animações
import { animate, cubicBezier } from "animejs"

// Importa configuração de cooldown de animações
import AnimationCooldown from "../utils/animationCooldown.js";

// Importa funções de animação da lista de projetos
import {
    slideDownProjectContainer, showProjectItem, // Animações de entrada
    slideUpProjectContainer, hideProjectItem, // Animação de saída
    highlightProject, resetScrollPosition // Animações de seleção
} from "../utils/projectListAnimations.js";


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

    showProjectContainer() {
        // Anima a exibição do container de projetos
        slideDownProjectContainer(
            this.elements.projectContainer,
            AnimationCooldown.projectList
        );
    }


    // ---------------------------
    // 2.6. showProjectItem - Exibe projeto com animação
    // ---------------------------

    showProjectItem(project: HTMLElement) {
        // Chama a função de animação para exibir o item de projeto
        showProjectItem(project)
    }


    // ---------------------------
    // 2.7. hideProjectItem - Oculta projeto com animação
    // ---------------------------

    hideProjectItem(project: HTMLElement) {
        // Chama a função de animação para ocultar o item de projeto
        hideProjectItem(project)
    }

    // ---------------------------
    // 2.7. hideProjectList - Oculta a lista de projetos
    // ---------------------------

    hideProjectList() {
        // Adiciona a classe de ocultação
        slideUpProjectContainer(this.elements.projectContainer, AnimationCooldown.projectList);
    }


    // ---------------------------
    // 2.8. highlightSelectedProject - Destaca projeto selecionado
    // ---------------------------

    highlightSelectedProject(project: HTMLElement) {

        // Define opacidade total para o projeto selecionado
        project.style.opacity = '1'

        // Itera sobre todos os itens de projeto
        for (let i = 0; i <= this.elements.projectItems.length - 1; i++) {

            // Remove a classe de hover de todos os itens
            u(this.elements.projectItems[i]).removeClass("hoverable");

            // Oculta todos os itens exceto o selecionado
            if (this.elements.projectItems[i] !== project) {
                hideProjectItem(this.elements.projectItems[i]);
            }
        }

        // Adiciona classe de foco à lista
        u(this.elements.projectList).addClass("list-focus")


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
        highlightProject(project, targetTop);

        // Anima o scroll do container para o topo
        resetScrollPosition(this.elements.projectContainer);

        // Após 200ms, desabilita o overflow Y do container
        setTimeout(() => {
            this.elements.projectContainer.style.overflowY = "hidden";
        }, 200);

    }
}

export default ProjectListView;