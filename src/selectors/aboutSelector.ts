import u from "umbrellajs"

interface Elements{
    about: HTMLElement;
    paragraphs: HTMLElement[]
    git: HTMLElement;
}

class AboutSelector{
    static elements: Elements

    static defineElements(): Elements{
        const about: HTMLElement = u(".about").nodes[0] as HTMLElement;

        const paragraphs: HTMLElement[] = u(".about-content p").nodes as HTMLElement[]

        const git: HTMLElement = u(".about-git").nodes[0] as HTMLElement

        AboutSelector.elements = {
            about: about,
            paragraphs: paragraphs,
            git: git
        }

        return AboutSelector.elements
    }
}

export {AboutSelector, Elements}