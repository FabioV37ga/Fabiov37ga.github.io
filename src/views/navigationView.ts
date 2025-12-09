/**
 * ============================================================================
 * NAVIGATION VIEW
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe NavigationView
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. unselectItem() - Remove seleção de um item
 *    2.4. selectItem() - Marca um item como selecionado
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa Umbrella JS para manipulação DOM
import u from 'umbrellajs';

// Importa a interface Elements do seletor de navegação
import { Elements } from '../selectors/navigationSelector.js';


// ---------------------------
// 2. CLASSE NAVIGATIONVIEW
// ---------------------------

class NavigationView {

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    // Elementos DOM da navegação
    elements: Elements;


    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------

    constructor(elements: Elements) {
        // Armazena os elementos DOM recebidos
        this.elements = elements;
    }


    // ---------------------------
    // 2.3. unselectItem - Remove seleção de um item
    // ---------------------------

    unselectItem(item: HTMLElement) {
        // Define o atributo selected como "false"
        u(item).attr("selected", "false");

        // Seleciona o primeiro filho (label do item)
        const itemLabel = u(item).children().first() as HTMLElement;

        // Remove o marcador " •" do texto do label 
        u(itemLabel).find(".marker").remove();
    }


    // ---------------------------
    // 2.4. selectItem - Marca um item como selecionado
    // ---------------------------

    selectItem(item: HTMLElement) {
        // Define o atributo selected como "true"
        u(item).attr("selected", "true");

        // Seleciona o primeiro filho (label do item)
        const itemLabel = u(item).children().first() as HTMLElement;

        // Adiciona o marcador " •" ao final do texto
        u(itemLabel).append(`
            <span class="marker"> •</span>
        `)
    }
}

export default NavigationView;