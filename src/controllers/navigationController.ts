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
 *    2.5. animateMarkers() - Inicia animações dos marcadores
 *    2.6. breakMarkerSpin() - Finaliza rotação dos marcadores
 *    2.7. hideSelectedItemContent() - Oculta conteúdo do item selecionado
 *    2.8. showSelectedItemContent() - Exibe conteúdo do item selecionado
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

// Importa a view que controla a renderização e estados visuais da navegação
import NavigationView from "../views/navigationView.js";

// Importa controllers dependentes que serão instanciados conforme seleção
import ProjectListController from "./projectListController.js";
import ProjectController from "./projectController.js";
import AboutController from "./aboutController.js";
import ContactController from "./contactController.js";


// Importa utilitários de animação necessários para coordenar transições
import ProjectListAnimations from "../utils/projectListAnimations.js";
import ProjectDisplayAnimations from "../utils/projectDisplayAnimations.js";
import projectListAnimations from "../utils/projectListAnimations.js";
import AboutAnimations from "../utils/aboutAnimations.js";
import ContactAnimations from "../utils/contactAnimations.js";

// ---------------------------
// 2. CLASSE NAVIGATIONCONTROLLER
// ---------------------------

class NavigationController {

    // ---------------------------
    // 2.1. PROPRIEDADES
    // ---------------------------

    // Elementos DOM da navegação (itens, marcadores, containers)
    elements: Elements = NavigationSelector.defineElements();

    // View que encapsula a lógica visual da navegação
    view: NavigationView = new NavigationView(this.elements);

    // Item atualmente selecionado na navegação (padrão: projects)
    selected: HTMLElement = this.elements.projects;


    // ---------------------------
    // 2.2. CONSTRUCTOR
    // ---------------------------

    constructor(state: string) {
        // Constrói array de itens que representam cada seção navegável
        const items: HTMLElement[] = [
            this.elements.projects,
            this.elements.about,
            this.elements.contact
        ];

        // Anexa os handlers de clique aos itens
        this.addHandlers(items);

        // Realiza seleção inicial de acordo com o estado (ex.: 'init')
        this.selectItem(items, this.selected, state);
    }


    // ---------------------------
    // 2.3. addHandlers - Adiciona eventos de clique aos itens
    // ---------------------------

    addHandlers(items: HTMLElement[]) {

        // Para cada item de navegação, associe um clique que chama selectItem
        items.forEach((item: HTMLElement) => {
            u(item).on("click", () => {
                this.selectItem(items, item);
            });
        });
    }


    // ---------------------------
    // 2.4. selectItem - Seleciona um item e desmarca os outros
    // ---------------------------

    async selectItem(items: HTMLElement[], item: HTMLElement, state?: string) {
        // Bloqueia seleção se houver animações em cooldown em outras partes
        if (ProjectListAnimations.slideDownProjectContainer.isPlaying === false
            && ProjectDisplayAnimations.hideProject.isPlaying == false
            && AboutController.isPlaying == false
            && ContactController.isPlaying === false
        ) {
            // Guarda o item que estava selecionado anteriormente
            const previousSelected = this.selected;

            // Se é uma nova seleção ou inicialização, prossiga
            if (previousSelected !== item || state === "init") {
                // Remove estado visual de seleção de todos os itens
                items.forEach((item: HTMLElement) => {
                    this.view.unselectItem(item)
                });

                // Se não for inicialização, oculta conteúdo do item anterior
                if (state !== "init")
                    this.hideSelectedItemContent(this.selected);

                // Atualiza item selecionado e aplica estilo visual
                this.selected = item;
                this.view.selectItem(item);

                // Delay especial para a primeira inicialização, caso necessário
                var delay: number = state == "init" ? 1750 : 0;
                await this.showSelectedItemContent(item, delay);

            } else {
                // Caso o item já estivesse selecionado, não faz nada
            }
        } else {
            // Caso haja cooldown, ignora a seleção para evitar conflitos
        }
    }

    // ---------------------------
    // 2.5. animateMarkers - Inicia animações dos marcadores
    // ---------------------------
    async animateMarkers(item: HTMLElement, delay: number) {
        // Re-obtem elementos e dispara animação dos marcadores na view
        var elements = NavigationSelector.defineElements()
        this.view.animateMarker(elements)

    }

    // ---------------------------
    // 2.6. breakMarkerSpin - Finaliza rotação dos marcadores
    // ---------------------------
    async breakMarkerSpin() {
        // Re-obtem elementos e para a animação contínua dos marcadores
        var elements = NavigationSelector.defineElements()
        this.view.breakMarkerAnimation(elements)
    }

    // ---------------------------
    // 2.5. hideSelectedItemContent - Oculta conteúdo do item selecionado
    // ---------------------------

    hideSelectedItemContent(item: HTMLElement) {
        // Decide a ação a tomar com base no item selecionado
        switch (item) {
            case this.elements.projects:
                // Se não houver projeto destacado, fecha a lista inteira
                if (!ProjectListController.hasHighlightedProject) {
                    ProjectListController.hideProjectList();
                }
                // Caso um projeto esteja destacado, fecha apenas o display do projeto
                else {
                    ProjectController.instance.hideProject("navigation");
                }

                break;
            case this.elements.about:
                // Encaminha para o controller About ocultar seu conteúdo
                AboutController.instance.hideAboutContent()
                break;
            case this.elements.contact:
                // Determina largura da janela para avaliar layout responsivo
                var windowWidth = window.innerWidth;
                ContactController.instance.hideContactContent(windowWidth)
                break;
        }
    }


    // ---------------------------
    // 2.6. showSelectedItemContent - Exibe conteúdo do item selecionado
    // ---------------------------

    async showSelectedItemContent(item: HTMLElement, delay: number) {
        // Dispara animação/efeito nos marcadores ao iniciar a mudança
        this.animateMarkers(item, delay);

        // Roteia para a ação apropriada conforme o item selecionado
        switch (item) {
            case this.elements.projects:
                // Garante que animações de outras seções não estejam ativas
                if (ContactController.instance)
                    await ContactAnimations.check(
                        () => ContactController.isPlaying
                    )

                if (AboutController.instance)
                    await AboutAnimations.check(
                        () => AboutAnimations.hideAboutItems.isPlaying
                    )

                // Cria o controller da lista de projetos com o delay recebido
                new ProjectListController(delay);

                // Aguarda a animação de abertura da lista terminar
                await ProjectListAnimations.check(
                    () => ProjectListAnimations.slideDownProjectContainer.isPlaying
                )

                break;
            case this.elements.about:
                // Aguarda animações de saída da lista e do display de projeto
                await projectListAnimations.check(
                    () => projectListAnimations.slideUpProjectContainer.isPlaying
                )

                await ProjectDisplayAnimations.check(
                    () => ProjectDisplayAnimations.hideProject.isPlaying
                )

                // Aguarda qualquer animação de contato terminar
                await ContactAnimations.check(
                    () => ContactController.isPlaying
                )

                // Instancia e mostra a seção About
                new AboutController()

                await AboutAnimations.check(
                    () => AboutController.isPlaying
                )

                break;
            case this.elements.contact:
                // Aguarda animações pendentes da lista e display
                await projectListAnimations.check(
                    () => projectListAnimations.slideUpProjectContainer.isPlaying
                )

                await ProjectDisplayAnimations.check(
                    () => ProjectDisplayAnimations.hideProject.isPlaying
                )


                await AboutAnimations.check(
                    () => AboutAnimations.hideAboutItems.isPlaying
                )

                // Cria o controller de contato e aguarda sua sequência
                new ContactController();

                await ContactAnimations.check(
                    () => ContactController.isPlaying
                )

                break;
        }

        // Finaliza a rotação dos marcadores após a exibição
        this.breakMarkerSpin()
    }
}

export default NavigationController;