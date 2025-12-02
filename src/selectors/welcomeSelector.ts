/**
 * ============================================================================
 * WELCOME SELECTOR
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface Elements
 * 3. Classe WelcomeSelector
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

// Define a estrutura dos elementos da tela de boas-vindas
interface Elements {
    welcome: HTMLElement;      // Container principal de boas-vindas
    portfolio: HTMLElement;    // Título "portfolio" com animação
}


// ---------------------------
// 3. CLASSE WELCOMESELECTOR
// ---------------------------

class WelcomeSelector {
    
    // ---------------------------
    // 3.1. PROPRIEDADES ESTÁTICAS
    // ---------------------------
    
    // Armazena os elementos selecionados do DOM
    static elements: Elements;

    
    // ---------------------------
    // 3.2. defineElements - Define e retorna elementos do DOM
    // ---------------------------
    
    static defineElements() {

        // Seleciona e armazena os elementos DOM necessários
        WelcomeSelector.elements = {
            // Seleciona o container principal de boas-vindas
            welcome: u('.welcome').first() as HTMLElement,
            
            // Seleciona o título "portfolio" dentro do texto de boas-vindas
            portfolio: u('.welcome-text .title').first() as HTMLElement
        };

        // Retorna o objeto com os elementos selecionados
        return WelcomeSelector.elements;
    }
}

export { WelcomeSelector, Elements };