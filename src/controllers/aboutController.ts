import u from "umbrellajs"

import { AboutSelector, Elements } from "../selectors/aboutSelector.js"

import AboutView from "../views/aboutView.js"

class AboutController{
    elements: Elements = AboutSelector.defineElements();

    view: AboutView = new AboutView(this.elements);

    static instance: AboutController

    constructor(){
        this.showAboutContent()

        AboutController.instance = this;
    }

    showAboutContent(){
        const elements = this.elements.paragraphs.concat(this.elements.git)
        var delay: number = 0;

        this.view.showContent()

        for (let element = 0; element <= elements.length - 1; element++){
            this.view.showParagraph(elements[element], delay)
            delay += 200

        }

        console.log(elements)
    }

    hideAboutContent(){
        this.view.hideContent() 
    }
}

export default AboutController