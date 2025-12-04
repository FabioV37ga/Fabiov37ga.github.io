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
            <img src="images/icons/play.svg" alt="">
        </a>
        <a href="${project.github}" target="_blank" class="project-code">
            <img src="images/icons/github-mark-white.svg" alt="">
        </a>
    </div>

    <span class="back-container">
        <a class="back-button">
            return
        </a>
    </span>
`