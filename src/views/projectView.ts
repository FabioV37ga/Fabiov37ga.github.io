/**
 * ============================================================================
 * PROJECT VIEW
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe ProjectView
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. showProject() - Exibe projeto com animações sequenciais
 *    2.4. hideProject() - Oculta projeto com animação
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Tipo de dados que representa um projeto
import { Project } from "../data/projects.js";

// Interface Elements definida pelo selector do display de projeto
import { Elements } from "../selectors/projectSelector.js";

// Utilitário com as animações usadas pelo display de projeto
import projectDisplayAnimations from "../utils/projectDisplayAnimations.js";
import ProjectDisplayAnimations from "../utils/projectDisplayAnimations.js";


// ---------------------------
// 2. CLASSE PROJECTVIEW
// ---------------------------

class ProjectView {

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    // Elementos DOM do display de projeto
    elements: Elements


    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------

    constructor(elements: Elements) {
        // Salva referência aos elementos utilizados por este view
        this.elements = elements;
    }


    // ---------------------------
    // 2.3. showProject - Exibe projeto com animações sequenciais
    // ---------------------------

    async showProject(elements: Elements, project: Project) {

        // Atualiza referências DOM (caso sejam reobtidas externamente)
        this.elements = elements;

        // Calcula número de badges de tecnologia e atraso base entre elas
        var totalTechnologies = this.elements.projectTechnologies.length;
        var techDelay = 200;

        // Dispara animação de entrada para cada tecnologia em sequência
        for (let tech = 0; tech < totalTechnologies; tech++) {
            projectDisplayAnimations.techFadeIn.animation(
                this.elements.projectTechnologies[tech],
                tech * techDelay
            );
        }

        // Executa animação de 'typing' na descrição e obtém contagem de caracteres animados
        var totalCharacters: number = await projectDisplayAnimations.typeDescription.animation(
            this.elements.projectDescription,
            200 * totalTechnologies
        ) as number;

        // Após a digitação, expande um espaçador com base no tamanho da descrição
        projectDisplayAnimations.expandSpacer.animation(
            this.elements.spacer,
            totalCharacters * 5 + 100
        );

        // Exibe os botões de ação (acessar, código, voltar) de maneira sincronizada
        projectDisplayAnimations.showButtons.animation(
            [this.elements.projectAccess, this.elements.projectCode, this.elements.returnButton],
            totalCharacters * 5 + 500
        )

        // Aplica estilos/efeitos finais nos botões após entrarem
        projectDisplayAnimations.styleButtons.animation([
            this.elements.projectAccess,
            this.elements.projectCode
        ], totalCharacters * 5 + 550);
    }


    // ---------------------------
    // 2.4. hideProject - Oculta projeto com animação
    // ---------------------------

    async hideProject(element: HTMLElement) {
        await projectDisplayAnimations.animateAndWait(
            projectDisplayAnimations.hideProject,
            element
        )
    }

    // ---------------------------
    // 2.5. ButtonInteractions - Animações de hover dos botões
    // ---------------------------


    buttonInteractions(btn: HTMLElement, interaction: "enter" | "leave") {
        switch (interaction) {
            case "enter":
                // Controla animações de hover entre botões para suavizar transições
                var previous = ProjectDisplayAnimations.previousHoveredButton;

                if (btn !== previous) {
                    ProjectDisplayAnimations.currentBackgroundPosition = "100%";
                    previous = btn as HTMLElement;
                }
                ProjectDisplayAnimations.buttonMouseLeave(btn).pause();
                ProjectDisplayAnimations.buttonMouseEnter(btn).play();
                ProjectDisplayAnimations.showOnHover(btn).play()

                break;
            case "leave":
                // Reverte animações de hover ao sair do botão
                ProjectDisplayAnimations.buttonMouseEnter(btn).pause();
                ProjectDisplayAnimations.buttonMouseLeave(btn).play();
                ProjectDisplayAnimations.hideOnBlur(btn).play()
                break;
        }
    }
}

export default ProjectView;