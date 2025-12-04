/**
 * ============================================================================
 * WELCOME CONTROLLER
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe WelcomeController
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. handleWelcome() - Gerencia a animação de boas-vindas
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa Umbrella JS para manipulação DOM e eventos
import u from "umbrellajs";

// Importa o seletor de elementos e a interface Elements
import { WelcomeSelector, Elements } from "../selectors/welcomeSelector.js";

// Importa a view responsável pela renderização
import WelcomeView from "../views/welcomeView.js";


// ---------------------------
// 2. CLASSE WELCOMECONTROLLER
// ---------------------------

class WelcomeController{
    
    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------
    
    // Elementos DOM da tela de boas-vindas
    elements: Elements = WelcomeSelector.defineElements();
    
    // Instância da view para manipulação visual
    view: WelcomeView = new WelcomeView(this.elements);

    
    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    
    constructor(){
        // Inicia o gerenciamento da animação de boas-vindas
        this.handleWelcome();
    }

    
    // ---------------------------
    // 2.3. handleWelcome - Gerencia a animação de boas-vindas
    // ---------------------------
    
    handleWelcome(){
        // Escuta o fim da animação do elemento portfolio
        u(this.elements.portfolio).on("animationend", ()=>{
            // Remove a tela de boas-vindas através da view
            this.view.removeWelcome();
        })
    }
}

export default WelcomeController;