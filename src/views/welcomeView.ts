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
import WelcomeAnimations from "../utils/welcomeAnimations.js";


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

    constructor(elements: Elements) {
        // Armazena os elementos DOM passados como parâmetro
        this.elements = elements;
    }


    // ---------------------------
    // 2.3. removeWelcome - Remove a tela de boas-vindas
    // ---------------------------

    async removeWelcome(elements: Elements) {
        WelcomeAnimations.fadeOutWelcomeText.animation(elements.name, 1000)

        await WelcomeAnimations.check(
            () => WelcomeAnimations.fadeOutWelcomeText.isPlaying
        )

        WelcomeAnimations.fadeOutWelcomeText.animation(this.elements.portfolio, 0);

        await WelcomeAnimations.check(
            () => WelcomeAnimations.fadeOutWelcomeText.isPlaying
        )

        this.elements.welcome.remove()
    }
}

export default WelcomeView
