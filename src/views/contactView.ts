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

import contactAnimations from "../utils/contactAnimations.js";

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
    displayContact(){
        contactAnimations.displayContact.animation(this.elements.container)
    }

    // ---------------------------
    // 2.4. showTitle - Animação de títulos individuais
    // ---------------------------
    showTitle(title: HTMLElement, delay: number) {
        contactAnimations.showTitles.animation(title, delay)
    }
}

export default ContactView;