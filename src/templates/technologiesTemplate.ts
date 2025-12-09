/**
 * ============================================================================
 * TECHNOLOGIES TEMPLATE
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface Technologies
 * 3. Funções de Template
 *    3.1. html5() - Badge HTML5
 *    3.2. css3() - Badge CSS3
 *    3.3. javascript() - Badge JavaScript
 *    3.4. typescript() - Badge TypeScript
 *    3.5. react() - Badge React
 *    3.6. nodejs() - Badge Node.js
 *    3.7. python() - Badge Python
 *    3.8. java() - Badge Java
 *    3.9. cpp() - Badge C++
 *    3.10. mysql() - Badge MySQL
 *    3.11. mongodb() - Badge MongoDB
 *    3.12. json() - Badge JSON
 *    3.13. googleSheets() - Badge Google Sheets
 *    3.14. jquery() - Badge jQuery
 * 4. Export do Objeto Technologies
 * 
 * DESCRIÇÃO:
 * Templates para badges de tecnologias usando shields.io.
 * Cada função retorna um elemento HTML com a badge correspondente.
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

import html from "nanohtml"

// ---------------------------
// 2. INTERFACE TECHNOLOGIES
// ---------------------------

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

// ---------------------------
// 3. FUNÇÕES DE TEMPLATE
// ---------------------------

// ---------------------------
// 3.1. html5 - Badge HTML5
// ---------------------------

const html5 = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    </li>
`

// ---------------------------
// 3.2. css3 - Badge CSS3
// ---------------------------

const css3 = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    </li>
`

// ---------------------------
// 3.3. javascript - Badge JavaScript
// ---------------------------

const javascript = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    </li>
`

// ---------------------------
// 3.4. typescript - Badge TypeScript
// ---------------------------

const typescript = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript">
    </li>
`

// ---------------------------
// 3.5. react - Badge React
// ---------------------------

const react = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React">
    </li>
`

// ---------------------------
// 3.6. nodejs - Badge Node.js
// ---------------------------

const nodejs = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
    </li>
`

// ---------------------------
// 3.7. python - Badge Python
// ---------------------------

const python = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python">
    </li>
`

// ---------------------------
// 3.8. java - Badge Java
// ---------------------------

const java = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white" alt="Java">
    </li>
`

// ---------------------------
// 3.9. cpp - Badge C++
// ---------------------------

const cpp = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/C++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white" alt="C++">
    </li>
`

// ---------------------------
// 3.10. mysql - Badge MySQL
// ---------------------------

const mysql = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL">
    </li>
`

// ---------------------------
// 3.11. mongodb - Badge MongoDB
// ---------------------------

const mongodb = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB">
    </li>
`

// ---------------------------
// 3.12. json - Badge JSON
// ---------------------------

const json = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/JSON-000000?style=for-the-badge&logo=json&logoColor=white" alt="JSON">
    </li>
`

// ---------------------------
// 3.13. googleSheets - Badge Google Sheets
// ---------------------------

const googleSheets = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/Google%20Sheets-34A8537?style=for-the-badge&logo=google&logoColor=fff" alt="Google Sheets">
    </li>
`

// ---------------------------
// 3.14. jquery - Badge jQuery
// ---------------------------

const jquery = () => html`
    <li class="project-technology">
        <img src="https://img.shields.io/badge/JQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=fff" alt="jQuery">
    </li>
`

// ---------------------------
// 4. EXPORT DO OBJETO TECHNOLOGIES
// ---------------------------

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