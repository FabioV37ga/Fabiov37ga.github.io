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
    // Armazena o valor de zoom original do dispositivo
    originalZoom: number;

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    // Elementos DOM do container principal (wrapper da aplicação)
    elements: Elements = ContainerSelector.defineElements();

    // View que controla render e dimensionamento do container
    view: ContainerView = new ContainerView(this.elements);

    
    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    
    constructor() {
        // Escuta resize para ajustar layout responsivo
        this.addResizeEvent();

        // Armazena escala do dispositivo para uso em cálculos de layout
        this.originalZoom = window.devicePixelRatio;

        // Exibe o container da aplicação (pode executar animações iniciais)
        this.showContainer();
    }
   
    // ---------------------------
    // 2.3. addResizeEvent - Adiciona evento de redimensionamento
    // ---------------------------
    
    addResizeEvent() {
        // Escuta mudanças de tamanho da janela e delega à view o ajuste
        window.addEventListener('resize', () => {
            this.view.updateContainerSize();
        });
    }

    async showContainer() {
        await this.view.showContainer();
    }
}

export default ContainerController;