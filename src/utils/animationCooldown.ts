/**
 * ============================================================================
 * ANIMATION COOLDOWN
 * ============================================================================
 * 
 * SUMÁRIO:
 * 1. Classe AnimationCooldown
 *    1.1. Propriedades Estáticas - Controle de animações da lista de projetos
 *    1.2. Propriedades Estáticas - Controle de animações de foco
 * 
 * DESCRIÇÃO:
 * Classe utilitária para gerenciar cooldowns de animações, evitando que
 * múltiplas animações sejam disparadas simultaneamente.
 * 
 * ============================================================================
 */

// ---------------------------
// 1. CLASSE ANIMATIONCOOLDOWN
// ---------------------------

class AnimationCooldown{
    
    // ---------------------------
    // 1.1. PROPRIEDADES ESTÁTICAS - Controle de animações da lista de projetos
    // ---------------------------
    
    // Duração da animação de abertura/fechamento da lista (em ms)
    static projectList: number;
    
    // Flag de cooldown para prevenir múltiplas animações da lista
    static projectListCooldown: boolean = false;

    
    // ---------------------------
    // 1.2. PROPRIEDADES ESTÁTICAS - Controle de animações de foco
    // ---------------------------
    
    // Duração da animação de foco no projeto (em ms)
    static projectFocus: number = 1000;
    
    // Flag de cooldown para prevenir múltiplos focos simultâneos
    static projectFocusCooldown: boolean = false;
}

export default AnimationCooldown;