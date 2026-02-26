/**
 * ============================================================================
 * CONTACT CONTROLLER
 * ============================================================================
 *
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe ContactController
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. addHandlers() - Adiciona event listeners (clipboard)
 *    2.4. showContent() - Sequência de exibição do conteúdo
 *    2.5. displayContent() - Renderiza a view de contato
 *    2.6. showTitles() - Anima títulos e divisor
 *    2.7. showCards() - Anima cartões de contato
 *    2.8. expandDivisor() - Anima expansão do divisor
 *    2.9. hideContactContent() - Sequência de ocultação do conteúdo
 *    2.10. hideCards() - Anima ocultação dos cartões
 *    2.11. hideTitles() - Anima ocultação dos títulos e divisor
 *
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

import u from "umbrellajs";

import { ContactSelector, Elements } from "../selectors/contactSelector.js";
import ContactAnimations from "../utils/contactAnimations.js";
import ContactView from "../views/contactView.js";

// ---------------------------
// 2. CLASSE CONTACTCONTROLLER
// ---------------------------

class ContactController {
    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------
    // Elementos DOM da seção Contact
    elements: Elements = ContactSelector.defineElements();

    // Instância da view responsável pela renderização
    view: ContactView = new ContactView(this.elements);

    // Flag para indicar se alguma animação está em execução
    static isPlaying: boolean = false;

    // Instância estática para acesso global se necessário
    static instance: ContactController;

    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    constructor() {
        ContactController.instance = this;
        this.showContent()
        this.addHandlers()
    }

    // ---------------------------
    // 2.3. addHandlers() - Adiciona event listeners (clipboard)
    // ---------------------------
    addHandlers() {
        // Ao clicar no primeiro cartão copia o e-mail para a área de transferência
        u(this.elements.cards[0]).on("click", () => {
            navigator.clipboard.writeText("veigabfabio@hotmail.com")
            // Alterna ícones para indicar cópia
            this.elements.clipboard.children[0].classList.remove("fa-clone")
            this.elements.clipboard.children[0].classList.add("fa-check")

            // Reverte o ícone após 1.5s
            setTimeout(() => {
                this.elements.clipboard.children[0].classList.remove("fa-check")
                this.elements.clipboard.children[0].classList.add("fa-clone")
            }, 1500);
        })
    }

    // ---------------------------
    // 2.4. showContent() - Sequência de exibição do conteúdo
    // ---------------------------
    async showContent() {
        ContactController.isPlaying = true

        this.displayContent();
        await this.showTitles()
        await this.showCards()

        ContactController.isPlaying = false;
    }

    // ---------------------------
    // 2.5. displayContent() - Renderiza a view de contato
    // ---------------------------
    displayContent() {
        this.view.displayContact()
    }

    // ---------------------------
    // 2.6. showTitles() - Anima títulos e divisor
    // ---------------------------
    async showTitles() {
        var titles = this.elements.titles
        // Mostra primeiro título com pequeno delay
        this.view.showTitle(titles[0], 10)

        // Aguarda conclusão da animação de título
        await ContactAnimations.check(
            () => ContactAnimations.showTitles.isPlaying
        )

        // Expande o divisor entre títulos
        await this.expandDivisor()

        // Mostra segundo título com delay maior
        this.view.showTitle(titles[1], 100)

        // Aguarda conclusão da animação de título
        await ContactAnimations.check(
            () => ContactAnimations.showTitles.isPlaying
        )

        return true
    }

    // ---------------------------
    // 2.7. showCards() - Anima cartões de contato
    // ---------------------------
    async showCards() {

        // Prepara estado inicial dos cartões
        this.elements.cards.forEach(card => card.style.opacity = "0%")
        this.elements.cards.forEach(card => card.style.display = "flex")

        // Helper para disparar animação de um cartão
        function showcard(card: HTMLElement, delay: number) {
            ContactAnimations.showCards.animation(card, delay)
        }

        const cards = this.elements.cards

        // Exibe cartões em sequência, aguardando checagens entre grupos
        showcard(cards[0], 100)
        await ContactAnimations.check(
            () => ContactAnimations.showCards.isPlaying
        )

        showcard(cards[1], 0)
        showcard(cards[2], 0)

        await ContactAnimations.check(
            () => ContactAnimations.showCards.isPlaying
        )

        showcard(cards[3], 0)

        await ContactAnimations.check(
            () => ContactAnimations.showCards.isPlaying
        )

        return true
    }


    // ---------------------------
    // 2.8. expandDivisor() - Anima expansão do divisor
    // ---------------------------
    async expandDivisor() {
        ContactAnimations.expandDivisor.animation(this.elements.divisor)


        await ContactAnimations.check(
            () => ContactAnimations.expandDivisor.isPlaying
        )
        return true
    }

    // ---------------------------
    // 2.9. hideContactContent() - Sequência de ocultação do conteúdo
    // ---------------------------
    async hideContactContent() {
        ContactController.isPlaying = true;

        await this.hideCards()

        await this.hideTitles()

        ContactController.isPlaying = false
    }

    // ---------------------------
    // 2.10. hideCards() - Anima ocultação dos cartões
    // ---------------------------
    async hideCards() {

        // Helper para disparar animação de ocultação de um cartão
        function hideCard(card: HTMLElement, delay: number) {
            ContactAnimations.hideCards.animation(card, delay)
        }

        const cards = this.elements.cards

        // Executa animações de saída em ordem específica
        hideCard(cards[3], 100)

        await ContactAnimations.check(
            () => ContactAnimations.hideCards.isPlaying
        )

        hideCard(cards[1], 0)
        hideCard(cards[2], 0)

        await ContactAnimations.check(
            () => ContactAnimations.hideCards.isPlaying
        )

        hideCard(cards[0], 0)

        await ContactAnimations.check(
            () => ContactAnimations.hideCards.isPlaying
        )

        // Esconde os cartões ao final
        this.elements.cards.forEach(card => card.style.display = "none")

        return true
    }

    // ---------------------------
    // 2.11. hideTitles() - Anima ocultação dos títulos e divisor
    // ---------------------------
    async hideTitles() {
        const titles = this.elements.titles

        // Oculta o segundo título
        ContactAnimations.hideTitle.animation(titles[1], 0)

        await ContactAnimations.check(
            () => ContactAnimations.hideTitle.isPlaying
        )

        // Retrai o divisor
        ContactAnimations.retractDivisor.animation(this.elements.divisor)

        await ContactAnimations.check(
            () => ContactAnimations.retractDivisor.isPlaying
        )

        // Oculta o primeiro título
        ContactAnimations.hideTitle.animation(titles[0], 0)

        await ContactAnimations.check(
            () => ContactAnimations.hideTitle.isPlaying
        )

        return true

    }
}

export default ContactController;