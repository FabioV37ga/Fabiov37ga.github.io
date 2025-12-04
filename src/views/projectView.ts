import u from "umbrellajs";

import { Project } from "../data/projects.js";
import { Elements } from "../selectors/projectSelector.js";

import { techFadeIn, typeDescription, expandSpacer, showButtons } from "../utils/projectDisplayAnimations.js";

class ProjectView {
    elements: Elements

    constructor(elements: Elements) {
        this.elements = elements;
    }

    showProject(elements: Elements, project: Project) {

        this.elements = elements;


        var totalTechnologies = this.elements.projectTechnologies.length;
        var techDelay = 200;

        for (let tech = 0; tech < totalTechnologies; tech++) {
            techFadeIn(
                this.elements.projectTechnologies[tech],
                tech * techDelay
            );
        }

        var totalCharacters = typeDescription(
            this.elements.projectDescription,
            project,
            200 * totalTechnologies
        );

        console.log(totalCharacters)

        expandSpacer(
            this.elements.spacer,
            totalCharacters * 5 + (200 * totalTechnologies) + 500
        );

        showButtons(
            [this.elements.projectAccess, this.elements.projectCode, this.elements.returnButton],
            totalCharacters * 5 + (200 * totalTechnologies) + 1000
        )
    }
}

export default ProjectView;