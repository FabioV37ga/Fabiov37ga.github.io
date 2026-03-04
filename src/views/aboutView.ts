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

import u from "umbrellajs"

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
        AboutAnimations.expandContainer.animation(
            this.elements.about
        )
        await AboutAnimations.check(
            () => AboutAnimations.expandContainer.isPlaying
        )
    }

    async showTitle() {
        AboutAnimations.showTitle.animation(
            this.elements.title
        )

        await AboutAnimations.check(
            () => AboutAnimations.showTitle.isPlaying
        )
    }

    async showParagraph(paragraph: HTMLElement, delay: number) {
        AboutAnimations.slideInAboutItem.animation(
            paragraph,
            delay
        )

        await AboutAnimations.check(
            () => AboutAnimations.slideInAboutItem.isPlaying
        )
    }

    showSidebar() {
        AboutAnimations.showSidebar.animation(
            this.elements.sidebar
        )
    }

    async hideContent() {
        AboutAnimations.hideAboutItems.animation(
            this.elements.about
        )

        await AboutAnimations.check(
            () => AboutAnimations.hideAboutItems.isPlaying
        )

        const elements = this.elements.paragraphs.concat(this.elements.git).concat(this.elements.title)

        elements.forEach(element => {
            element.style.opacity = '0'
        });
    }

}

export default AboutView