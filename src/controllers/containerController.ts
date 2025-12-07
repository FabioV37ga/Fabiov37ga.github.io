/**
 * ============================================================================
 * CONTAINER CONTROLLER
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe ContainerController
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. addResizeEvent() - Adiciona evento de redimensionamento
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa o seletor de elementos e a interface Elements
import {ContainerSelector, Elements} from "../selectors/containerSelector.js";

// Importa a view responsável pela renderização
import ContainerView from "../views/containerView.js";


// ---------------------------
// 2. CLASSE CONTAINERCONTROLLER
// ---------------------------

class ContainerController {
    
    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------
    
    // Elementos DOM do container principal
    elements: Elements = ContainerSelector.defineElements();
    
    // Instância da view para renderização e manipulação visual
    view: ContainerView = new ContainerView(this.elements);

    
    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    
    constructor() {
        // Adiciona o evento de redimensionamento da janela
        this.addResizeEvent();
    }

    
    // ---------------------------
    // 2.3. addResizeEvent - Adiciona evento de redimensionamento
    // ---------------------------
    
    addResizeEvent() {
        // Escuta o evento resize da janela
        window.addEventListener('resize', () => {
            // Atualiza o tamanho do container através da view
            this.view.updateContainerSize();
        });
    }
}

export default ContainerController;