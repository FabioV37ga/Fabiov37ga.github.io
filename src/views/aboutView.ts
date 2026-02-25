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

class AboutView{
    elements: Elements;

    constructor(elements: Elements){
        this.elements = elements
    }

    showContent(){
        AboutAnimations.showAbout.animation(
            this.elements.about
        )
    }

    showParagraph(paragraph: HTMLElement, delay: number){
        AboutAnimations.slideInAboutItem.animation(
            paragraph,
            delay
        )
    }

    showSidebar(){
        AboutAnimations.showSidebar.animation(
            this.elements.sidebar
        )
    }

    hideContent(){
        AboutAnimations.hideAboutItems.animation(
            this.elements.about
        )
    }

}

export default AboutView