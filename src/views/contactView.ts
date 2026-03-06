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
        // Dispara a animação de exibição do título e aguarda sua execução
        await ContactAnimations.animateAndWait(
            ContactAnimations.showTitles,
            title,
            delay
        )
    }

    async hideTitle(title: HTMLElement, delay: number) {
        // Executa animação de ocultação para um título específico
        await ContactAnimations.animateAndWait(
            ContactAnimations.hideTitle,
            title,
            delay
        )
    }

    async showCard(card: HTMLElement, delay: number) {
        // Mostra um cartão de contato (ex: email, telefone) com animação
        await ContactAnimations.animateAndWait(
            ContactAnimations.showCards,
            card,
            delay
        )
    }

    async hideCard(card: HTMLElement, delay: number) {
        // Oculta um cartão de contato com animação de saída
        await ContactAnimations.animateAndWait(
            ContactAnimations.hideCards,
            card,
            delay
        )
    }

    async expandDivisor(element: HTMLElement) {
        // Expande o divisor visual na seção de contato (placeholder)
        await ContactAnimations.animateAndWait(
            ContactAnimations.expandDivisor,
            this.elements.divisor
        )
    }

    async retractDivisor(divisor: HTMLElement){
        await ContactAnimations.animateAndWait(
            ContactAnimations.retractDivisor,
            divisor
        )
    }
}

export default ContactView;