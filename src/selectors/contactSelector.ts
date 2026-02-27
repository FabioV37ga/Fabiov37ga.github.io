/**
 * ============================================================================
 * CONTACT SELECTOR
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface Elements
 * 3. Classe ContactSelector
 *    3.1. Propriedades Estáticas
 *    3.2. defineElements() - Seleciona e retorna elementos da seção Contact
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------
import u from "umbrellajs";

// ---------------------------
// 2. INTERFACE ELEMENTS
// ---------------------------
interface Elements {
    container: HTMLElement;
    titles: HTMLElement[];
    divisor: HTMLElement;
    cards: HTMLElement[];
    clipboard: HTMLElement;
}

// ---------------------------
// 3. CLASSE CONTACTSELECTOR
// ---------------------------

class ContactSelector {
    // ---------------------------
    // 3.1. PROPRIEDADES ESTÁTICAS
    // ---------------------------
    static elements: Elements;

    // ---------------------------
    // 3.2. defineElements - Seleciona e retorna elementos da seção Contact
    // ---------------------------
    static defineElements() {
        const container: HTMLElement = u('.contact').first() as HTMLElement;
        const titles: HTMLElement[] = u('.contact-title').nodes as HTMLElement[];
        const divisor: HTMLElement = u('.contact-divisor').first() as HTMLElement;
        const cards: HTMLElement[] = u('.contact-card').nodes as HTMLElement[];
        const clipboard: HTMLElement = u('.contact-clipboard').first() as HTMLElement;

        this.elements = {
            container,
            titles,
            divisor,
            cards,
            clipboard
        };
        return ContactSelector.elements;
    }
}

export { ContactSelector, Elements };