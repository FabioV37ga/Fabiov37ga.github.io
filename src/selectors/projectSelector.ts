/**
 * ============================================================================
 * PROJECT SELECTOR
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface Elements
 * 3. Classe ProjectSelector
 *    3.1. Propriedades Estáticas
 *    3.2. defineElements() - Define e retorna elementos do DOM
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa Umbrella JS para seleção de elementos DOM
import u from 'umbrellajs';


// ---------------------------
// 2. INTERFACE ELEMENTS
// ---------------------------

// Define a estrutura dos elementos do display de projeto
interface Elements{
    projectContainer: HTMLElement;       // Container principal do projeto
    projectTechnologies: HTMLElement[];  // Array de badges de tecnologias
    projectDescription: HTMLElement;     // Container da descrição do projeto
    spacer: HTMLElement;                 // Elemento espaçador
    projectAccess: HTMLElement;          // Botão de acesso ao projeto
    projectCode: HTMLElement;            // Botão de acesso ao código
    returnButton: HTMLElement;           // Botão de retorno à lista
}


// ---------------------------
// 3. CLASSE PROJECTSELECTOR
// ---------------------------

class ProjectSelector {
    
    // ---------------------------
    // 3.1. PROPRIEDADES ESTÁTICAS
    // ---------------------------
    
    // Armazena os elementos selecionados do DOM
    static elements: Elements;

    
    // ---------------------------
    // 3.2. defineElements - Define e retorna elementos do DOM
    // ---------------------------
    
    static defineElements() {
        // Seleciona o container principal do projeto
        const projectContainer: HTMLElement = u('.project-display').first() as HTMLElement;
        
        // Seleciona todos os badges de tecnologia e converte para array
        const projectTechnologies: HTMLElement[] = u('.project-technology').nodes as HTMLElement[];
        
        // Seleciona o container da descrição do projeto
        const projectDescription: HTMLElement = u('.description-content').first() as HTMLElement;
        
        // Seleciona o elemento espaçador
        const spacer: HTMLElement = u('.spacer').first() as HTMLElement;
        
        // Seleciona o botão de acesso ao projeto
        const projectAccess: HTMLElement = u('.project-access').first() as HTMLElement;
        
        // Seleciona o botão de acesso ao código
        const projectCode: HTMLElement = u('.project-code').first() as HTMLElement;
        
        // Seleciona o botão de retorno
        const returnButton: HTMLElement = u('.back-button').first() as HTMLElement;
        
        // Armazena os elementos selecionados no objeto estático
        ProjectSelector.elements = {
            projectContainer: projectContainer,
            projectTechnologies: projectTechnologies,
            projectDescription: projectDescription,
            spacer: spacer,
            projectAccess: projectAccess,
            projectCode: projectCode,
            returnButton: returnButton
        }

        // Retorna o objeto com os elementos selecionados
        return ProjectSelector.elements;
    }
}

export { ProjectSelector, Elements };