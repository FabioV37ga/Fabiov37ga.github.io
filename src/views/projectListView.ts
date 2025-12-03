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
        // Adiciona classe de exibição ao container principal
        u(this.elements.projectContainer).addClass("projects-container-show");
    }


    // ---------------------------
    // 2.6. showProjectItem - Exibe projeto com animação
    // ---------------------------

    showProjectItem(project: HTMLElement) {
        // Adiciona a classe de ativação para exibir o projeto
        u(project).addClass("project-item-active");
    }


    // ---------------------------
    // 2.7. hideProjectItem - Oculta projeto com animação
    // ---------------------------

    hideProjectItem(project: HTMLElement) {
        // Adiciona a classe de ocultação para esconder o projeto
        u(project).addClass("project-item-hide");
    }

    // ---------------------------
    // 2.7. hideProjectList - Oculta a lista de projetos
    // ---------------------------

    hideProjectList() {
        // Remove a classe de exibição
        u(this.elements.projectContainer).removeClass("projects-container-show");
        
        // Adiciona a classe de ocultação
        u(this.elements.projectContainer).addClass("projects-container-hide");
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
            
            // Remove a classe de ativo de todos os itens
            u(this.elements.projectItems[i]).removeClass("project-item-active");

            // Oculta todos os itens exceto o selecionado
            if (this.elements.projectItems[i] !== project) {
                u(this.elements.projectItems[i]).addClass("project-item-hide");
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

        // Anima o projeto para a posição superior
        animate(project, {
            y: -targetTop, // Move para cima
            duration: 1200, // Duração de 1.2s
            ease: cubicBezier(0.111, 0.473, 0.444, 0.989), // Curva de aceleração customizada
            delay: 300 // Aguarda 300ms antes de iniciar
        })

        // Anima o scroll do container para o topo
        animate(this.elements.projectContainer,{
            scrollTop: 0, // Volta ao topo
            duration: 1200, // Duração de 1.2s
            ease: cubicBezier(0.111, 0.473, 0.444, 0.989), // Mesma curva de aceleração
            delay: 300 // Aguarda 300ms antes de iniciar
        })

        // Após 200ms, desabilita o overflow Y do container
        setTimeout(() => {
            this.elements.projectContainer.style.overflowY = "hidden";
        }, 200);

    }
}

export default ProjectListView;