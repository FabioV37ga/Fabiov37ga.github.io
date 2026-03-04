/**
 * ============================================================================
 * ABOUT CONTROLLER
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe AboutController
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. showAboutContent() - Exibe conteúdo da seção About
 *    2.4. hideAboutContent() - Oculta conteúdo da seção About
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

import { AboutSelector, Elements } from "../selectors/aboutSelector.js"
import AboutView from "../views/aboutView.js"

// ---------------------------
// 2. CLASSE ABOUTCONTROLLER
// ---------------------------

class AboutController {
    // Elementos DOM da seção About
    elements: Elements = AboutSelector.defineElements();

    // Instância da view para manipular a exibição
    view: AboutView = new AboutView(this.elements);

    // Instância estática para acesso global
    static instance: AboutController

    static isPlaying: boolean = false;

    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    constructor() {
        this.showAboutContent()
        AboutController.instance = this;
    }

    // ---------------------------
    // 2.3. showAboutContent() - Exibe conteúdo da seção About
    // ---------------------------
    async showAboutContent() {


        AboutController.isPlaying = true;

        const elements = this.elements.paragraphs.concat(this.elements.git)

        await this.view.showContainer()

        await this.view.showTitle()

        elements.forEach((element) => {
            element.style.display = "flex"
            element.style.opacity = "0"
        })

        for (let element = 0; element <= elements.length - 1; element++) {
            await this.view.showParagraph(elements[element], 0)

            if (element == elements.length - 1) {
                AboutController.isPlaying = false
            }
        }
    }

    // ---------------------------
    // 2.4. hideAboutContent() - Oculta conteúdo da seção About
    // ---------------------------
    hideAboutContent() {
        this.view.hideContent()
    }
}

export default AboutController