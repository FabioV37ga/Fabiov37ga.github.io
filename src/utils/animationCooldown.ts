class AnimationCooldown{
    // Animação de abertura/fechamento da lista de projetos
    static projectList: number;
    static projectListCooldown: boolean = false;

    // Animação de foco no projeto (lista)
    static projectFocus: number = 1000;
    static projectFocusCooldown: boolean = false;
    
}

export default AnimationCooldown;