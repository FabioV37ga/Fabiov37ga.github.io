import u from "umbrellajs";

import { ContactSelector, Elements } from "../selectors/contactSelector.js";
import ContactAnimations from "../utils/contactAnimations.js";
import ContactView from "../views/contactView.js";
class ContactController {


    elements: Elements = ContactSelector.defineElements();

    view: ContactView = new ContactView(this.elements);

    static instance: ContactController;

    constructor() {
        this.showContent()
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
}

export default ContactController;