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

// Seletor e types da tela de boas-vindas
import { WelcomeSelector, Elements } from "../selectors/welcomeSelector.js";

// View e animações da tela de boas-vindas
import WelcomeView from "../views/welcomeView.js";
import ContainerController from "./containerController.js";


// ---------------------------
// 2. CLASSE WELCOMECONTROLLER
// ---------------------------

class WelcomeController{
    
    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------
    
    // Elementos DOM da tela de boas-vindas (container, títulos, etc.)
    elements: Elements = WelcomeSelector.defineElements();
    
    // View que encapsula render e animações da tela inicial
    view: WelcomeView = new WelcomeView(this.elements);

    
    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    
    constructor(){
        // Inicia a sequência de boas-vindas ao criar o controller
        this.handleWelcome();
    }

    
    // ---------------------------
    // 2.3. handleWelcome - Gerencia a animação de boas-vindas
    // ---------------------------
    
    async handleWelcome(){
        // Aguarda a remoção/termino da animação de boas-vindas na view
        await this.view.removeWelcome(this.elements);

        // Após a tela de welcome, instancia o controller do container principal
        new ContainerController();

    }
}

export default WelcomeController;