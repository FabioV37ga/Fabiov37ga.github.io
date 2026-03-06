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

// Importa Umbrella para manipulação DOM
import u from "umbrellajs";

// Importa seletor e tipos para a seção de contato
import { ContactSelector, Elements } from "../selectors/contactSelector.js";
// Importa utilitários e view específicos de Contact
import ContactView from "../views/contactView.js";

// ---------------------------
// 2. CLASSE CONTACTCONTROLLER
// ---------------------------

class ContactController {
    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------
    // Elementos DOM da seção Contact (cards, titles, divisor, clipboard)
    elements: Elements = ContactSelector.defineElements();

    // View que encapsula render e animações da seção Contact
    view: ContactView = new ContactView(this.elements);

    // Flag que indica se alguma animação de contato está ocorrendo
    static isPlaying: boolean = false;

    // Instância estática para permitir chamadas externas ao controller
    static instance: ContactController;

    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    constructor() {
        // Registra instância atual
        ContactController.instance = this;

        // Inicia sequência de exibição do conteúdo
        this.showContent()

        // Associa handlers interativos (ex: copiar email)
        this.addHandlers()
    }

    // ---------------------------
    // 2.3. addHandlers() - Adiciona event listeners (clipboard)
    // ---------------------------
    addHandlers() {
        // Handler para copiar email ao clicar no primeiro cartão
        u(this.elements.cards[0]).on("click", () => {
            navigator.clipboard.writeText("veigabfabio@hotmail.com")

            // FIXME - isso deveria estar em view
            // Atualiza ícone para indicar cópia bem-sucedida
            this.elements.clipboard.children[0].classList.remove("fa-clone")
            this.elements.clipboard.children[0].classList.add("fa-check")

            // Reverte o ícone após 1.5s para o estado original
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
        // Marca execução em andamento para evitar reentrância
        ContactController.isPlaying = true

        // Determina largura da janela para fluxo responsivo
        const windowWidth = window.innerWidth;

        // Renderiza o markup da view imediatamente
        this.displayContent();

        // Sequência diferente para dispositivos maiores e menores
        if (windowWidth > 450) {
            // Em telas grandes, exibe títulos e em seguida os cartões
            await this.showTitles()
            await this.showCards()
        } else {
            // Em telas pequenas, intercalamos títulos e cartões por linhas
            await this.showTitles(0)
            await this.showCards(0)
            await this.showCards(1)
            await this.showTitles(1)
            await this.showCards(2)
            await this.showCards(3)
        }

        // Libera flag após término das animações
        ContactController.isPlaying = false;
    }

    // ---------------------------
    // 2.5. displayContent() - Renderiza a view de contato
    // ---------------------------
    displayContent() {
        // Encaminha para a view renderizar o HTML da seção
        this.view.displayContact()
    }

    // ---------------------------
    // 2.6. showTitles() - Anima títulos e divisor
    // ---------------------------
    async showTitles(title?: number) {
        // Obtém array de títulos (ex: 'Contato' e subtítulo)
        var titles = this.elements.titles

        if (title == 0 || title == 1) {
            // Mostra título específico quando index fornecido
            await this.view.showTitle(titles[title], 0)
        } else {
            // Sequência padrão: mostra primeiro título, expande divisor, depois segundo título
            await this.view.showTitle(titles[0], 0)
            await this.view.expandDivisor(this.elements.divisor)
            await this.view.showTitle(titles[1], 0)
        }

        return true
    }

    // ---------------------------
    // 2.7. showCards() - Anima cartões de contato
    // ---------------------------
    // REVER - Cabe refatoração?
    async showCards(card?: number) {
        // Torna todos os cartões visíveis no layout e prepara opacidade inicial
        const cards = this.elements.cards
        cards.forEach(card => {
            if (card.style.display === "none")
                card.style.opacity = "0%"
            card.style.display = "flex"
        })

        if (card != undefined) {
            // Exibe um cartão específico quando index fornecido
            cards[card].style.opacity = "0%"
            await this.view.showCard(cards[card], 0)
        }
        else {
            // Sequência padrão para exibir os cartões em ordem visual específica
            cards.forEach(card => card.style.opacity = "0%")
            cards.forEach(card => card.style.display = "flex")

            this.view.showCard(cards[0], 0)
            await this.view.showCard(cards[2], 100)

            this.view.showCard(cards[1], 0)
            await this.view.showCard(cards[3], 100)
        }

        return true
    }

    // ---------------------------
    // 2.9. hideContactContent() - Sequência de ocultação do conteúdo
    // ---------------------------
    async hideContactContent(width: number) {
        // Marca execução para evitar novas interações
        ContactController.isPlaying = true;

        // Sequência de ocultação varia conforme largura (responsivo)
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

        // Libera flag após conclusão
        ContactController.isPlaying = false
    }

    // ---------------------------
    // 2.10. hideCards() - Anima ocultação dos cartões
    // ---------------------------
    async hideCards(card?: number) {

        const cards = this.elements.cards

        if (card != undefined) {
            // Oculta um cartão específico
            await this.view.hideCard(cards[card], 10)
        } else {
            // Sequência de saída para todos os cartões em ordem visual
            await this.view.hideCard(cards[3], 100)
            await this.view.hideCard(cards[1], 0)
            await this.view.hideCard(cards[2], 0)
            await this.view.hideCard(cards[0], 0)

            // Ao final, esconde todos do layout
            cards.forEach(card => card.style.display = "none")
        }

        // Verifica estado de display e garante que elementos ocultos permaneçam escondidos
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

        if (title != undefined) {
            // Versão mobile
            await this.view.hideTitle(titles[title], 0)
        } else {
            // Versão desktop

            await this.view.hideTitle(this.elements.titles[1], 0)
            await this.view.retractDivisor(this.elements.divisor)
            await this.view.hideTitle(titles[0], 0)
        }

        return true

    }
}

export default ContactController;