import html from "nanohtml"

export interface Technologies {
    html5: HTMLElement;
    css3: HTMLElement;
    javascript: HTMLElement;
    typescript: HTMLElement;
    react: HTMLElement;
    nodejs: HTMLElement;
    python: HTMLElement;
    java: HTMLElement;
    cpp: HTMLElement;
    mysql: HTMLElement;
    mongodb: HTMLElement;
    json: HTMLElement;
    googleSheets: HTMLElement;
    jquery: HTMLElement;
}

const html5 = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    </li>
`

const css3 = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    </li>
`

const javascript = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    </li>
`

const typescript = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    </li>
`

const react = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
    </li>
`

const nodejs = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
    </li>
`

const python = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
    </li>
`

const java = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
    </li>
`

const cpp = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++">
    </li>
`

const mysql = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
    </li>
`

const mongodb = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
    </li>
`

const json = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON">
    </li>
`

const googleSheets = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/Google%20Sheets-34A8537?style=for-the-badge&logo=google&logoColor=fff" alt="Google Sheets">
    </li>
`

const jquery = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/JQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=fff" alt="jQuery">
    </li>
`

export const Technologies = {
    html5: html5(),
    css3: css3(),
    javascript: javascript(),
    typescript: typescript(),
    react: react(),
    nodejs: nodejs(),
    python: python(),
    java: java(),
    cpp: cpp(),
    mysql: mysql(),
    mongodb: mongodb(),
    json: json(),
    googleSheets: googleSheets(),
    jquery: jquery()
}