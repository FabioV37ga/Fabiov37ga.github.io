/**
 * ============================================================================
 * CONTAINER VIEW
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe ContainerView
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. setSize() - Define tamanho do container e posição do background
 *    2.4. updateContainerSize() - Atualiza tamanho do container
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa Umbrella JS para manipulação DOM
import u from "umbrellajs"

// Importa a interface Elements do seletor
import { Elements } from "../selectors/containerSelector.js";


// ---------------------------
// 2. CLASSE CONTAINERVIEW
// ---------------------------

class ContainerView {
    
    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------
    
    // Elementos DOM do container principal
    elements: Elements;

    
    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    
    constructor(elements: Elements) {
        // Armazena os elementos DOM passados como parâmetro
        this.elements = elements;
        
        // Define o tamanho inicial baseado nas dimensões da janela
        this.setSize(window.innerWidth, window.innerHeight);
    }

    
    // ---------------------------
    // 2.3. setSize - Define tamanho do container e posição do background
    // ---------------------------
    
    setSize(width: number, height: number) {

        // ------------------------------------------------------------------------------
        // # Janela de Contêiner Principal

        // Define o padding padrão com base nas dimensões da janela (Responsivo)
        // 55px para janelas grandes (>900x900), 20px para janelas menores
        const defaultPadding = width > 900 && height > 900 ? 55 : 20; // in pixels

        // Ajusta as dimensões subtraindo o padding de ambos os lados
        const adjustedWidth = width - (defaultPadding * 2);
        const adjustedHeight = height - (defaultPadding * 2);

        // Define o tamanho do container principal com base nas dimensões ajustadas
        u(this.elements.mainContainer).attr({
            style: `
            width: ${adjustedWidth}px; 
            height: ${adjustedHeight}px;
            `
        });


        // ------------------------------------------------------------------------------
        // # Background do Contêiner Principal
        
        // Largura base do background em pixels
        var baseWidth = 2600
        
        // Calcula o deslocamento à esquerda do background
        var leftOffset = width - baseWidth - 500; // Deslocamento à esquerda em pixels

        // Ajuste adicional para telas menores que 900px
        if (width < 900) {
            leftOffset += 250
        }

        // Define o deslocamento do background via CSS inline
        u(this.elements.background).attr({
            style: `
            left: ${leftOffset}px;
            `
        });
    }

    
    // ---------------------------
    // 2.4. updateContainerSize - Atualiza tamanho do container
    // ---------------------------
    
    updateContainerSize() {
        // Recalcula o tamanho usando as dimensões atuais da janela
        this.setSize(window.innerWidth, window.innerHeight);
    }
}

export default ContainerView;