/**
 * ============================================================================
 * ABOUT VIEW
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Classe AboutView
 *    1.1. Propriedades
 *    1.2. Constructor
 *    1.3. showContent() - Exibe a seção About
 *    1.4. showParagraph() - Exibe parágrafo/item com animação
 *    1.5. hideContent() - Oculta a seção About
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS
// ---------------------------

import AboutController from "../controllers/aboutController.js";
import { Elements } from "../selectors/aboutSelector.js"

import AboutAnimations from "../utils/aboutAnimations.js";

// ---------------------------
// 2. CLASSE ABOUTVIEW
// ---------------------------

class AboutView {
    elements: Elements;

    constructor(elements: Elements) {
        this.elements = elements
    }

    async showContainer() {
        this.elements.about.style.display = 'flex'
        this.elements.about.style.opacity = '1'

        await this.showTitle()
    }

    async showTitle() {
        await AboutAnimations.animateAndWait(
            AboutAnimations.showTitle,
            this.elements.title
        )
    }

    async showParagraph(paragraph: HTMLElement, delay: number) {
        await AboutAnimations.animateAndWait(
            AboutAnimations.showAboutItem,
            paragraph,
            delay
        )
    }

    async hideContent() {
        var aboutElements: HTMLElement[] = [this.elements.title].concat(this.elements.paragraphs)

        for (let elemento = aboutElements.length-1 ; elemento >= 0; elemento--){
            await AboutAnimations.animateAndWait(
                AboutAnimations.hideAboutItem,
                aboutElements[elemento]
            )
        }

        this.elements.about.style.display = "none"
    }
}

export default AboutView