/**
 * ============================================================================
 * WELCOME VIEW
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe WelcomeView
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. removeWelcome() - Remove a tela de boas-vindas
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa a interface Elements do seletor
import { Elements } from "../selectors/welcomeSelector.js";


// ---------------------------
// 2. CLASSE WELCOMEVIEW
// ---------------------------

class WelcomeView {
    
    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------
    
    // Elementos DOM da tela de boas-vindas
    elements: Elements

    
    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    
    constructor(Elementos: any) {
        // Armazena os elementos DOM passados como parâmetro
        this.elements = Elementos;
    }

    
    // ---------------------------
    // 2.3. removeWelcome - Remove a tela de boas-vindas
    // ---------------------------
    
    removeWelcome(){
        // Remove o elemento welcome do DOM
        this.elements.welcome.remove()
    }
}

export default WelcomeView
