/**
 * ============================================================================
 * ABOUT CONTROLLER
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe AboutController
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. showAboutContent() - Exibe conteúdo da seção About
 *    2.4. hideAboutContent() - Oculta conteúdo da seção About
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa o seletor que localiza os elementos da seção About e a interface Elements
import { AboutSelector, Elements } from "../selectors/aboutSelector.js"
// Importa a view que encapsula a lógica de render/ animações da seção About
import AboutView from "../views/aboutView.js"

// ---------------------------
// 2. CLASSE ABOUTCONTROLLER
// ---------------------------

class AboutController {
    // Elementos DOM da seção About: obtidos via AboutSelector.defineElements()
    elements: Elements = AboutSelector.defineElements();

    // Instância da view responsável por exibir e animar o conteúdo
    view: AboutView = new AboutView(this.elements);

    // Instância estática, permite acessar o controller globalmente se necessário
    static instance: AboutController

    // Flag global que indica se a exibição/ animação está em progresso
    static isPlaying: boolean = false;

    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------
    constructor() {
        // Inicia a exibição do conteúdo About ao construir o controller
        this.showAboutContent()

        // Registra a instância atual para acesso estático
        AboutController.instance = this;
    }

    // ---------------------------
    // 2.3. showAboutContent() - Exibe conteúdo da seção About
    // ---------------------------
    async showAboutContent() {
        // Marca que a exibição está em andamento para prevenir reentrância
        AboutController.isPlaying = true;

        // Junta os parágrafos e o elemento de link/git em um único array
        const elements = this.elements.paragraphs

        // Mostra o container (possíveis animações/estilos iniciais)
        await this.view.showContainer()

        // Inicializa cada elemento: garante que estejam visíveis no layout mas invisíveis visualmente
        elements.forEach((element) => {
            // Define display para que a animação possa ajustar tamanho/posicionamento
            element.style.display = "flex"
            // Inicialmente invisível; as animações alterarão a opacidade
            element.style.opacity = "0"
        })

        // Exibe cada parágrafo um por um usando await para sequência
        for (let element = 0; element <= elements.length - 1; element++) {
            // Chama a view para animar o parágrafo atual; o segundo argumento é delay/offset
            await this.view.showParagraph(elements[element], 0)

            // Se for o último elemento, limpa a flag isPlaying
            if (element == elements.length - 1) {
                AboutController.isPlaying = false
            }
        }
    }

    // ---------------------------
    // 2.4. hideAboutContent() - Oculta conteúdo da seção About
    // ---------------------------
    hideAboutContent() {
        // Encaminha para a view a lógica de ocultar o conteúdo (animações de saída)
        this.view.hideContent()
    }
}

export default AboutController