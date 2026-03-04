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
// Dados do tipo Project e lista de projetos
import { Project } from "../data/projects.js";

// Umbrella para seleções e eventos DOM
import u from "umbrellajs";

// Template que gera o HTML do display de um projeto
import { projectTemplate } from "../templates/projectTemplate.js";

// Seletor e tipos dos elementos do display de projeto
import { ProjectSelector, Elements } from "../selectors/projectSelector.js";

// View que controla render e animações do display de projeto
import ProjectView from "../views/projectView.js";
import ProjectListController from "./projectListController.js";


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
        // Registra instância atual para chamadas estáticas
        ProjectController.instance = this;

        // Posiciona o display relativo ao elemento de título clicado
        this.setPosition(projectTitleElement);

        // Injeta o template com os dados do projeto no container
        this.setProjectData(project)

        // Aciona a exibição com as animações apropriadas
        this.showProject(project)
    }


    // ---------------------------
    // 2.3. addHandlers - Adiciona eventos aos botões
    // ---------------------------

    addHandlers() {
        // Handler do botão de retorno: fecha o display e volta à lista
        var returnBtn = this.elements.returnButton;
        u(returnBtn).on('click', async () => {
            // Remove o listener para evitar múltiplos cliques concorrentes
            u(returnBtn).off('click');
            this.hideProject("projectController");
        })

        // Handlers de interação para botões de acesso e código
        var accessBtn = this.elements.projectAccess;
        var codeBtn = this.elements.projectCode;
        var btns = [accessBtn, codeBtn];

        // Adiciona efeitos visuais ao entrar/sair do botão
        btns.forEach((btn) => {
            u(btn).on('mouseenter', (e) => {
                this.view.buttonInteractions(btn, "enter");
            })
            u(btn).on('mouseleave', (e) => {
                this.view.buttonInteractions(btn, "leave");
            })
        })
    }


    // ---------------------------
    // 2.4. setPosition - Define a posição do display do projeto
    // ---------------------------

    setPosition(projectElement: HTMLElement) {
        // Usa o primeiro filho do elemento de título como referência de altura
        var reference = u(projectElement).children().first() as HTMLElement;

        var responsiveAdditional = 0

        if (window.innerWidth <= 800)
            responsiveAdditional = 15
        else
            responsiveAdditional = 55

        // Define posição top do container baseado na altura do título referenciado
        this.elements.projectContainer.style = `
        top: ${reference.offsetHeight}px;
        display: flex;`

    }

    // ---------------------------
    // 2.5. setProjectData - Insere o template do projeto no DOM
    // ---------------------------

    setProjectData(project: Project) {
        // Injeta o HTML do projeto no container usando o template
        this.elements.projectContainer.append(
            projectTemplate(project)
        )
    }


    // ---------------------------
    // 2.6. showProject - Exibe o projeto com animações
    // ---------------------------

    async showProject(project: Project) {
        // Log auxiliar para desenvolvimento
        console.log("Iniciando animação de exibição do projeto...")

        // Re-obtem referências DOM após inserir o template
        this.elements = ProjectSelector.defineElements();

        // Dispara a animação de entrada do projeto via view
        this.view.showProject(this.elements, project);

        // Anexa handlers aos botões do display
        this.addHandlers();
    }


    // ---------------------------
    // 2.7. hideProject - Oculta o projeto
    // ---------------------------

    async hideProject(origin: string) {
        // Solicita à view que execute a animação de fechamento do projeto
        await this.view.hideProject(this.elements.projectContainer);

        // Após ocultar, notifica a lista para desfocar o projeto selecionado
        ProjectListController.blurSelectedProject(origin);
    }
}

export default ProjectController;