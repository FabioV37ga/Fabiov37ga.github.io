import u from 'umbrellajs';

interface Elements{
    projectContainer: HTMLElement; // Container dos projetos
    projectTechnologies: HTMLElement[]; // Container das tecnologias do projeto
    projectDescription: HTMLElement; // Container da descrição do projeto
    spacer: HTMLElement; // Spacer element
    projectAccess: HTMLElement; // Container de acesso ao projeto
    projectCode: HTMLElement; // Container do código do projeto
    returnButton: HTMLElement; // Botão de retorno
}

class ProjectSelector {
    static elements: Elements;

    static defineElements() {

        const projectContainer: HTMLElement = u('.project-display').first() as HTMLElement;
        const projectTechnologies: HTMLElement[] = u('.project-technology').nodes as HTMLElement[];
        const projectDescription: HTMLElement = u('.description-content').first() as HTMLElement;
        const spacer: HTMLElement = u('.spacer').first() as HTMLElement;
        const projectAccess: HTMLElement = u('.project-access').first() as HTMLElement;
        const projectCode: HTMLElement = u('.project-code').first() as HTMLElement;
        const returnButton: HTMLElement = u('.back-button').first() as HTMLElement;
        
        ProjectSelector.elements = {
            projectContainer: projectContainer,
            projectTechnologies: projectTechnologies,
            projectDescription: projectDescription,
            spacer: spacer,
            projectAccess: projectAccess,
            projectCode: projectCode,
            returnButton: returnButton
        }

        return ProjectSelector.elements;
    }
}

export { ProjectSelector, Elements };