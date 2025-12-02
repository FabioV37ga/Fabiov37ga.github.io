/**
 * ============================================================================
 * NAVIGATION SELECTOR
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface Elements
 * 3. Classe NavigationSelector
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

// Define a estrutura dos elementos de navegação
interface Elements {
    projects: HTMLElement;  // Item de navegação "Projetos"
    about: HTMLElement;     // Item de navegação "Sobre"
    contact: HTMLElement;   // Item de navegação "Contato"
}


// ---------------------------
// 3. CLASSE NAVIGATIONSELECTOR
// ---------------------------

class NavigationSelector {

    // ---------------------------
    // 3.1. PROPRIEDADES ESTÁTICAS
    // ---------------------------
    
    // Armazena os elementos selecionados do DOM
    static elements: Elements
    
    
    // ---------------------------
    // 3.2. defineElements - Define e retorna elementos do DOM
    // ---------------------------
    
    static defineElements(): Elements {
        // Seleciona o primeiro item de navegação (Projetos)
        const projects: HTMLElement = u('.navigation-item').nodes[0] as HTMLElement;
        
        // Seleciona o segundo item de navegação (Sobre)
        const about: HTMLElement = u('.navigation-item').nodes[1] as HTMLElement;
        
        // Seleciona o terceiro item de navegação (Contato)
        const contact: HTMLElement = u('.navigation-item').nodes[2] as HTMLElement;

        // Armazena os elementos selecionados no objeto estático
        NavigationSelector.elements = {
            projects: projects,
            about: about,
            contact: contact
        }

        // Retorna o objeto com os elementos selecionados
        return NavigationSelector.elements;
    }
}

export { NavigationSelector, Elements };