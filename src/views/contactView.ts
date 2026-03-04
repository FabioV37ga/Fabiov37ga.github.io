/**
 * ============================================================================
 * CONTACT VIEW
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe ContactView
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. displayContact() - Exibe o container de contato
 *    2.4. showTitle() - Animação de títulos individuais
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

import { Elements } from "../selectors/contactSelector.js";
import ContactAnimations from "../utils/contactAnimations.js";

// ---------------------------
// 2. CLASSE CONTACTVIEW
// ---------------------------

class ContactView {
    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------
    elements: Elements;

    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    constructor(elements: Elements) {
        // Armazena os elementos DOM recebidos
        this.elements = elements;
    }

    // ---------------------------
    // 2.3. displayContact - Exibe o container de contato
    // ---------------------------
    displayContact() {
        ContactAnimations.displayContact.animation(this.elements.container)
    }

    // ---------------------------
    // 2.4. showTitle - Animação de títulos individuais
    // ---------------------------
    async showTitle(title: HTMLElement, delay: number) {
        ContactAnimations.showTitles.animation(title, delay)

        await ContactAnimations.check(
            () => ContactAnimations.showTitles.isPlaying
        )

        return true
    }

    async hideTitle(title: HTMLElement, delay: number) {
        ContactAnimations.hideTitle.animation(title, delay)

        await ContactAnimations.check(
            () => ContactAnimations.hideTitle.isPlaying
        )

        return true
    }

    async showCard(card: HTMLElement, delay: number) {
        ContactAnimations.showCards.animation(card, delay)

        await ContactAnimations.check(
            () => ContactAnimations.showCards.isPlaying
        )

        return true
    }

    async hideCard(card: HTMLElement, delay: number) {
        ContactAnimations.hideCards.animation(card, delay)

        await ContactAnimations.check(
            () => ContactAnimations.hideCards.isPlaying
        )

        return true
    }

    async expandDivisor(element: HTMLElement) {
        // FIXME
        ContactAnimations.expandDivisor.animation(this.elements.divisor)


        await ContactAnimations.check(
            () => ContactAnimations.expandDivisor.isPlaying
        )
        return true
    }
}

export default ContactView;