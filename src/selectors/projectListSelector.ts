/**
 * ============================================================================
 * PROJECT LIST SELECTOR
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Imports e Dependências
 * 2. Interface Elements
 * 3. Classe ProjectListSelector
 *    3.1. Propriedades Estáticas
 *    3.2. defineElements() - Define e retorna elementos do DOM
 * 
 * ============================================================================
 */

// ---------------------------
// 1. IMPORTS E DEPENDÊNCIAS
// ---------------------------

// Importa Umbrella JS para seleção de elementos DOM
import u from 'umbrellajs';


// ---------------------------
// 2. INTERFACE ELEMENTS
// ---------------------------

// Define a estrutura dos elementos da lista de projetos
interface Elements {
    projectContainer: HTMLElement;   // Container principal dos projetos
    projectList: HTMLElement;        // Lista de projetos
    projectItems: HTMLElement[];     // Array com todos os itens de projeto
}


// ---------------------------
// 3. CLASSE PROJECTLISTSELECTOR
// ---------------------------

class ProjectListSelector {
    
    // ---------------------------
    // 3.1. PROPRIEDADES ESTÁTICAS
    // ---------------------------
    
    // Armazena os elementos selecionados do DOM
    static elements: Elements;

    
    // ---------------------------
    // 3.2. defineElements - Define e retorna elementos do DOM
    // ---------------------------
    
    static defineElements() {
        // Seleciona o container principal de projetos
        const projectContainer: HTMLElement = u('.projects-container').first() as HTMLElement;
        
        // Seleciona a lista de projetos
        const projectList: HTMLElement = u('.projects-list').first() as HTMLElement;
        
        // Seleciona todos os itens de projeto e converte para array
        const projectItems: HTMLElement[] = u('.project-item').nodes as HTMLElement[];

        // Armazena os elementos selecionados no objeto estático
        ProjectListSelector.elements = {
            projectContainer: projectContainer,
            projectList: projectList,
            projectItems: projectItems
        };

        // Retorna o objeto com os elementos selecionados
        return ProjectListSelector.elements;
    }
}

export { ProjectListSelector, Elements };