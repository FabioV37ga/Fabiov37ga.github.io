/**
 * ============================================================================
 * NAVIGATION CONTROLLER
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Classe NavigationController
 *    2.1. Propriedades
 *    2.2. Constructor
 *    2.3. addHandlers() - Adiciona eventos de clique aos itens
 *    2.4. selectItem() - Seleciona um item e desmarca os outros
 *    2.5. hideSelectedItemContent() - Oculta conteúdo do item selecionado
 *    2.6. showSelectedItemContent() - Exibe conteúdo do item selecionado
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa Umbrella JS para manipulação DOM e eventos
import u from "umbrellajs";

// Importa o seletor de elementos e a interface Elements
import { NavigationSelector, Elements } from "../selectors/navigationSelector.js";

// Importa a view responsável pela renderização
import NavigationView from "../views/navigationView.js";

// Importa o controller da lista de projetos
import ProjectListController from "./projectListController.js";
import ProjectController from "./projectController.js";

// Importa o utilitário de controle de cooldown de animações
import Animation from "../utils/animation.js";


// ---------------------------
// 2. CLASSE NAVIGATIONCONTROLLER
// ---------------------------

class NavigationController {

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    // Elementos DOM da navegação
    elements: Elements = NavigationSelector.defineElements();

    // Instância da view para renderização e manipulação visual
    view: NavigationView = new NavigationView(this.elements);

    // Item atualmente selecionado (padrão: projects)
    selected: HTMLElement = this.elements.projects;


    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------

    constructor(state: string) {
        // Array com todos os itens de navegação
        const items: HTMLElement[] = [
            this.elements.projects,
            this.elements.about,
            this.elements.contact
        ];

        // Adiciona os event handlers aos itens de navegação
        this.addHandlers(items);

        // Seleciona o item inicial baseado no estado
        this.selectItem(items, this.selected, state);
    }


    // ---------------------------
    // 2.3. addHandlers - Adiciona eventos de clique aos itens
    // ---------------------------

    addHandlers(items: HTMLElement[]) {

        // Itera sobre cada item de navegação
        items.forEach((item: HTMLElement) => {
            // Adiciona evento de clique ao item usando Umbrella
            u(item).on("click", () => {
                // Seleciona o item clicado
                this.selectItem(items, item);
            });
        });
    }


    // ---------------------------
    // 2.4. selectItem - Seleciona um item e desmarca os outros
    // ---------------------------

    selectItem(items: HTMLElement[], item: HTMLElement, state?: string) {
        // Verifica se não está em cooldown de animação
        if (Animation.projectListCooldown === false) {
            // Armazena o item previamente selecionado
            const previousSelected = this.selected;

            // Verifica se é um item diferente ou é a inicialização
            if (previousSelected !== item || state === "init") {
                // Itera sobre todos os itens
                items.forEach((item: HTMLElement) => {
                    // Remove a seleção visual de cada item
                    this.view.unselectItem(item)
                });

                // Se não for inicialização, oculta o conteúdo do item anterior
                if (state !== "init")
                    this.hideSelectedItemContent(this.selected);

                // Atualiza a propriedade com o item selecionado
                this.selected = item;

                // Adiciona a seleção visual ao item clicado
                this.view.selectItem(item);

                // Exibe o conteúdo do item com delay de 1750ms
                this.showSelectedItemContent(item, 1750);
            } else {
                // Log quando o item já está selecionado
                // console.log("Item already selected. No action taken.");
            }
        } else {
            // Log quando a animação está em cooldown
            // console.log("Animation is on cooldown. Selection ignored.");
        }
    }


    // ---------------------------
    // 2.5. hideSelectedItemContent - Oculta conteúdo do item selecionado
    // ---------------------------

    hideSelectedItemContent(item: HTMLElement) {
        // Switch baseado no item selecionado
        switch (item) {
            case this.elements.projects:
                // Oculta a lista de projetos
                if (!ProjectListController.hasHighlightedProject){
                    ProjectListController.hideProjectList();
                }else{
                    // ProjectListController.blurSelectedProject();
                    ProjectController.instance.hideProject();
                }

                break;
            case this.elements.about:
                // Implementação futura: Ocultar seção "Sobre"
                break;
            case this.elements.contact:
                // Implementação futura: Ocultar seção "Contato"
                break;
        }
    }


    // ---------------------------
    // 2.6. showSelectedItemContent - Exibe conteúdo do item selecionado
    // ---------------------------

    showSelectedItemContent(item: HTMLElement, delay: number) {
        // Switch baseado no item selecionado
        switch (item) {
            case this.elements.projects:
                // Cria novo controller de lista de projetos com delay
                new ProjectListController(delay);
                break;
            case this.elements.about:
                // Implementação futura: Exibir seção "Sobre"
                break;
            case this.elements.contact:
                // Implementação futura: Exibir seção "Contato"
                break;
        }
    }
}

export default NavigationController;