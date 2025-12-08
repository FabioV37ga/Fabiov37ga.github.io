import html from "nanohtml"

import { Projects, Project } from "../data/projects.js"


export const projectTemplate = (project: Project) => html`
    <ul class="technologies">
        ${project.technologies}
    </ul>
    <div class="project-description">
        <span class="description-content">
            ${project.description}
        </span>
    </div>

    <div class="spacer"></div>

    <div class="buttons">
        <a href="${project.link}" target="_blank" class="project-access">
            <!--<img src="/images/icons/play.svg" alt="">-->
            <span class="button-image access">
                <span class="button-animation-block"></span>
            </span>
            <span class="button-background"></span>
        </a>
        <a href="${project.github}" target="_blank" class="project-code">
            <!--<img src="/images/icons/github-mark-white.svg" alt="">-->
            <span class="button-image code">
                <span class="button-animation-block"></span>
            </span>
            <span class="button-background"></span>
        </a>
    </div>

    <span class="back-container">
        <a class="back-button">
            return
        </a>
    </span>
`