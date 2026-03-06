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
        await AboutAnimations.animateAndWait(
            AboutAnimations.expandContainer,
            this.elements.about
        )
    }

    async showTitle() {
        await AboutAnimations.animateAndWait(
            AboutAnimations.showTitle,
            this.elements.title
        )
    }

    async showParagraph(paragraph: HTMLElement, delay: number) {
        await AboutAnimations.animateAndWait(
            AboutAnimations.slideInAboutItem,
            paragraph,
            delay
        )
    }

    showSidebar() {
        AboutAnimations.showSidebar.animation(
            this.elements.sidebar
        )
    }

    async hideContent() {
        await AboutAnimations.animateAndWait(
            AboutAnimations.hideAboutItems,
            this.elements.about
        )

        const elements =
            this.elements.paragraphs
                .concat(this.elements.git)
                .concat(this.elements.title)

        elements.forEach(element => {
            element.style.opacity = '0'
        });
    }

}

export default AboutView