import u from "umbrellajs";

interface Elements {
    container: HTMLElement;
    titles: HTMLElement[];
    divisor: HTMLElement;
    cards: HTMLElement[];
}

class ContactSelector {
    static elements: Elements;

    static defineElements() {
        const container: HTMLElement = u('.contact').first() as HTMLElement;
        const titles: HTMLElement[] = u('.contact-title').nodes as HTMLElement[];
        const divisor: HTMLElement = u('.contact-divisor').first() as HTMLElement;
        const cards: HTMLElement[] = u('.contact-card').nodes as HTMLElement[];

        this.elements = {
            container,
            titles,
            divisor,
            cards
        };
        return ContactSelector.elements;
    }
}

export { ContactSelector, Elements };