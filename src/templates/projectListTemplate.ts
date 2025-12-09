/**
 * ============================================================================
 * PROJECT LIST TEMPLATE
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Função nav_project
 * 
 * DESCRIÇÃO:
 * Template para itens da lista de navegação de projetos.
 * Cria elementos de lista com classe hoverable para interação.
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

import html from "nanohtml";

// ---------------------------
// 2. FUNÇÃO NAV_PROJECT
// ---------------------------

export const nav_project = (title: String) => html`
    <li class="project-item hoverable">
        <a>${title}</a>
    </li>
`