import { Elements } from "../selectors/contactSelector.js";

import contactAnimations from "../utils/contactAnimations.js";
class ContactView {
    elements: Elements;

    constructor(elements: Elements) {
        this.elements = elements;
    }

    displayContact(){
        contactAnimations.displayContact.animation(this.elements.container)
    }

    hideContact(){
        // contactAnimations.hideContact.animation(this.elements.container)
    }

    showTitle(title: HTMLElement, delay: number) {
        contactAnimations.showTitles.animation(title, delay)
    }
}

export default ContactView;