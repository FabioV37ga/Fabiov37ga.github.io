/**
 * ============================================================================
 * CONTAINER SELECTOR
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface Elements
 * 3. Classe ContainerSelector
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

// Define a estrutura dos elementos do container principal
interface Elements {
    mainContainer: HTMLElement;  // Container principal da aplicação
    background: HTMLElement;     // Elemento de background
}


// ---------------------------
// 3. CLASSE CONTAINERSELECTOR
// ---------------------------

class ContainerSelector {
    
    // ---------------------------
    // 3.1. PROPRIEDADES ESTÁTICAS
    // ---------------------------
    
    // Armazena os elementos selecionados do DOM
    static elements: Elements;

    
    // ---------------------------
    // 3.2. defineElements - Define e retorna elementos do DOM
    // ---------------------------
    
    static defineElements() {
        // Seleciona o container principal da aplicação
        const mainContainer: HTMLElement = u('.main-container').first() as HTMLElement;
        
        // Seleciona o elemento de background
        const mainContainerBackground: HTMLElement = u('.background').first() as HTMLElement;

        // Armazena os elementos selecionados no objeto estático
        ContainerSelector.elements = {
            mainContainer: mainContainer,
            background: mainContainerBackground
        }

        // Retorna o objeto com os elementos selecionados
        return ContainerSelector.elements;
    }
}

export { ContainerSelector, Elements };