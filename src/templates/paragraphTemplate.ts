/**
 * ============================================================================
 * PARAGRAPH TEMPLATE
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Função paragraph
 * 
 * DESCRIÇÃO:
 * Template simples para criar elementos span com texto.
 * Utilizado para formatar parágrafos na descrição de projetos.
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

import html from "nanohtml";

// ---------------------------
// 2. FUNÇÃO PARAGRAPH
// ---------------------------

export const paragraph = (text: string) => html`<span>${text}</span>`;
export const linkAttach = (link: string, text: string) =>
    html`<a href=${link} target="_blank" rel="noopener noreferrer">${text}</a>`;
