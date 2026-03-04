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

// Importa a interface Elements proveniente do seletor da tela de boas-vindas
import { Elements } from "../selectors/welcomeSelector.js";
// Importa utilitário de animações específico para a tela de welcome
import WelcomeAnimations from "../utils/welcomeAnimations.js";


// ---------------------------
// 2. CLASSE WELCOMEVIEW
// ---------------------------

class WelcomeView {

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    // Referência aos elementos DOM (container, títulos, etc.) fornecidos pelo selector
    elements: Elements


    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------

    constructor(elements: Elements) {
        // Salva a referência aos elementos para uso nas animações/metodos
        this.elements = elements;
    }


    // ---------------------------
    // 2.3. removeWelcome - Remove a tela de boas-vindas
    // ---------------------------

    async removeWelcome(elements: Elements) {
        // Inicia a animação de fade-out do título 'name' com delay
        WelcomeAnimations.fadeOutWelcomeText.animation(elements.name, 1000)

        // Aguarda término da animação anterior
        await WelcomeAnimations.check(
            () => WelcomeAnimations.fadeOutWelcomeText.isPlaying
        )

        // Em seguida, anima o título 'portfolio' (sem delay)
        WelcomeAnimations.fadeOutWelcomeText.animation(this.elements.portfolio, 0);

        // Aguarda término da segunda animação
        await WelcomeAnimations.check(
            () => WelcomeAnimations.fadeOutWelcomeText.isPlaying
        )

        // Remove o elemento de welcome do DOM após as animações
        this.elements.welcome.remove()
    }
}

export default WelcomeView
