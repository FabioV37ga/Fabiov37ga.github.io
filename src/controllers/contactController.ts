import u from "umbrellajs";

import { ContactSelector, Elements } from "../selectors/contactSelector.js";
import ContactAnimations from "../utils/contactAnimations.js";
import ContactView from "../views/contactView.js";
class ContactController {


    elements: Elements = ContactSelector.defineElements();

    view: ContactView = new ContactView(this.elements);

    isPlaying: boolean = false;

    static instance: ContactController;

    constructor() {
        this.showContent()

        ContactController.instance = this;
    }

    async showContent() {
        this.displayContent();
        await this.showTitles()
        this.showCards()
    }

    displayContent() {
        this.view.displayContact()
    }

    async showTitles() {
        var titles = this.elements.titles
        this.view.showTitle(titles[0], 10)
        console.log("mostrar titulo 1, animando...")

        await ContactAnimations.check(
            () => ContactAnimations.showTitles.isPlaying
        )
        console.log("titulo 1 animado, mostrar titulo 2")

        await this.expandDivisor()

        this.view.showTitle(titles[1], 100)

        await ContactAnimations.check(
            () => ContactAnimations.showTitles.isPlaying
        )
        console.log("titulo 2 animado, mostrar cards")

        return true
    }

    showCards() {

        const cards = this.elements.cards

        showcard(cards[0], 100)
        showcard(cards[1], 300)
        showcard(cards[2], 300)
        showcard(cards[3], 500)

        function showcard(card: HTMLElement, delay: number) {
            ContactAnimations.showCards.animation(card, delay)
        }
    }


    async expandDivisor() {
        ContactAnimations.expandDivisor.animation(this.elements.divisor)


        await ContactAnimations.check(
            () => ContactAnimations.expandDivisor.isPlaying
        )
        return true
    }

    async hideContactContent() {
        this.isPlaying = true;

        await this.hideCards()

        await this.hideTitles()

        this.isPlaying = false
    }

    async hideCards() {

        function hideCard(card: HTMLElement, delay: number) {
            ContactAnimations.hideCards.animation(card, delay)
        }

        const cards = this.elements.cards

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

        this.elements.cards.forEach(card => card.style.display = "none")

        return true
    }

    async hideTitles() {
        const titles = this.elements.titles

        ContactAnimations.hideTitle.animation(titles[1], 0)

        await ContactAnimations.check(
            () => ContactAnimations.hideTitle.isPlaying
        )   

        ContactAnimations.retractDivisor.animation(this.elements.divisor)

        await ContactAnimations.check(
            () => ContactAnimations.retractDivisor.isPlaying
        )

        ContactAnimations.hideTitle.animation(titles[0], 0)

        await ContactAnimations.check(
            () => ContactAnimations.hideTitle.isPlaying
        )

        return true

    }
}

export default ContactController;