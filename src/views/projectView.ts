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

// Importa Umbrella JS para manipulação DOM
import u from "umbrellajs";

// Importa o tipo Project dos dados
import { Project } from "../data/projects.js";

// Importa a interface Elements do seletor
import { Elements } from "../selectors/projectSelector.js";

// Importa funções de animação do display de projetos
import { techFadeIn, typeDescription, expandSpacer, showButtons, hideProject } from "../utils/projectDisplayAnimations.js";


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
        // Armazena os elementos DOM recebidos
        this.elements = elements;
    }

    
    // ---------------------------
    // 2.3. showProject - Exibe projeto com animações sequenciais
    // ---------------------------
    
    async showProject(elements: Elements, project: Project) {

        // Atualiza os elementos DOM
        this.elements = elements;

        // Calcula quantidade de tecnologias e delay entre animações
        var totalTechnologies = this.elements.projectTechnologies.length;
        var techDelay = 200;

        // Anima entrada de cada badge de tecnologia
        for (let tech = 0; tech < totalTechnologies; tech++) {
            techFadeIn(
                this.elements.projectTechnologies[tech],
                tech * techDelay
            );
        }

        // Anima digitação da descrição do projeto
        var totalCharacters = await typeDescription(
            this.elements.projectDescription,
            project,
            200 * totalTechnologies
        );

        // Anima expansão do espaçador após a descrição
        expandSpacer(
            this.elements.spacer,
            totalCharacters * 5 + 100
        );

        // Anima entrada dos botões de ação
        showButtons(
            [this.elements.projectAccess, this.elements.projectCode, this.elements.returnButton],
            totalCharacters * 5 + 500
        )
    }

    
    // ---------------------------
    // 2.4. hideProject - Oculta projeto com animação
    // ---------------------------
    
    hideProject(element: HTMLElement) {
        // Chama função de animação de saída do projeto
        hideProject(element);
    }
}

export default ProjectView;