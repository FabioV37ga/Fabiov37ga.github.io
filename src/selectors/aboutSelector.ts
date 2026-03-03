/**
 * ============================================================================
 * ABOUT SELECTOR
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Interface Elements
 * 2. Classe AboutSelector
 *    2.1. Propriedades
 *    2.2. defineElements() - Seleciona e retorna elementos da seção About
 *
 * ============================================================================
 */

// ---------------------------
// 1. INTERFACE ELEMENTS
// ---------------------------

import u from "umbrellajs"

interface Elements{
    about: HTMLElement;
    title: HTMLElement;
    paragraphs: HTMLElement[];
    git: HTMLElement;
    sidebar: HTMLElement;
}

// ---------------------------
// 2. CLASSE ABOUTSELECTOR
// ---------------------------

class AboutSelector{
    static elements: Elements

    static defineElements(): Elements{
        const about: HTMLElement = u(".about").nodes[0] as HTMLElement;

        const title: HTMLElement = u(".about h2").nodes[0] as HTMLElement;

        const paragraphs: HTMLElement[] = u(".about-content p").nodes as HTMLElement[]

        const git: HTMLElement = u(".about-git").nodes[0] as HTMLElement

        const sidebar: HTMLElement = u(".about-sidebar").nodes[0] as HTMLElement

        AboutSelector.elements = {
            about: about,
            title: title,
            paragraphs: paragraphs,
            git: git,
            sidebar: sidebar
        }

        return AboutSelector.elements
    }
}

export {AboutSelector, Elements}