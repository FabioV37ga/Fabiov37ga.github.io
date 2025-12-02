import html from "nanohtml";

export const nav_project = (title: String) => html`
    <li class="project-item">
        <a>${title}</a>
    </li>
`