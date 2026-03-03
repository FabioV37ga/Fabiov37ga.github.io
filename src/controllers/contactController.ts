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

        const windowWidth = window.innerWidth;

        this.displayContent();

        if (windowWidth > 450) {

            await this.showTitles()

            await this.showCards()

        } else {

            await this.showTitles(0)

            await this.showCards(0)
            await this.showCards(1)

            await this.showTitles(1)

            await this.showCards(2)
            await this.showCards(3)
        }

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
    async showTitles(title?: number) {
        var titles = this.elements.titles

        console.log(title)

        if (title == 0 || title == 1) {
            console.log("has fallen here")
            this.view.showTitle(titles[title], 0)

            await ContactAnimations.check(
                () => ContactAnimations.showTitles.isPlaying
            )
        } else {
            this.view.showTitle(titles[0], 0)
            await ContactAnimations.check(
                () => ContactAnimations.showTitles.isPlaying
            )

            this.expandDivisor()

            this.view.showTitle(titles[1], 0)
            await ContactAnimations.check(
                () => ContactAnimations.showTitles.isPlaying
            )
        }



        return true
    }

    // ---------------------------
    // 2.7. showCards() - Anima cartões de contato
    // ---------------------------
    async showCards(card?: number) {
        const cards = this.elements.cards
        cards.forEach(card => {
            if (card.style.display === "none")
                card.style.opacity = "0%"
            card.style.display = "flex"
        })


        // Helper para disparar animação de um cartão
        function showcard(card: HTMLElement, delay: number) {
            ContactAnimations.showCards.animation(card, delay)
        }

        if (card != undefined) {
            cards[card].style.opacity = "0%"

            showcard(cards[card], 10)
            await ContactAnimations.check(
                () => ContactAnimations.showCards.isPlaying
            )
        }
        else {
            // Prepara estado inicial dos cartões
            cards.forEach(card => card.style.opacity = "0%")
            cards.forEach(card => card.style.display = "flex")


            showcard(cards[0], 0)
            showcard(cards[2], 100)
            await ContactAnimations.check(
                () => ContactAnimations.showCards.isPlaying
            )
            showcard(cards[1], 0)
            showcard(cards[3], 100)
            await ContactAnimations.check(
                () => ContactAnimations.showCards.isPlaying
            )
        }


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
    async hideContactContent(width: number) {
        ContactController.isPlaying = true;

        if (width > 450) {
            await this.hideCards()

            await this.hideTitles()
        } else {
            await this.hideCards(3)
            await this.hideCards(2)
            await this.hideTitles(1)

            await this.hideCards(1)
            await this.hideCards(0)
            await this.hideTitles(0)
        }


        ContactController.isPlaying = false
    }

    // ---------------------------
    // 2.10. hideCards() - Anima ocultação dos cartões
    // ---------------------------
    async hideCards(card?: number) {

        // Helper para disparar animação de ocultação de um cartão
        function hideCard(card: HTMLElement, delay: number) {
            ContactAnimations.hideCards.animation(card, delay)
        }

        const cards = this.elements.cards


        if (card != undefined) {
            hideCard(cards[card], 10)
            await ContactAnimations.check(
                () => ContactAnimations.hideCards.isPlaying
            )

            // cards[card].style.display = "none"

        } else {
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
            cards.forEach(card => card.style.display = "none")
        }

        for (let i = 0; i < cards.length; i++) {
            if (cards[i].style.display == "flex") {
                break
            } else {
                cards.forEach(card => card.style.display = "none")

            }
        }

        return true
    }

    // ---------------------------
    // 2.11. hideTitles() - Anima ocultação dos títulos e divisor
    // ---------------------------
    async hideTitles(title?: number) {
        const titles = this.elements.titles


        if (title != undefined){
            ContactAnimations.hideTitle.animation(titles[title], 0)
    
            await ContactAnimations.check(
                () => ContactAnimations.hideTitle.isPlaying
            )
        }else{
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
        }

        return true

    }
}

export default ContactController;