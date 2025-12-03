import { animate, cubicBezier } from "animejs"


// ---------------------------
// Animações da lista de projetos (PROJECT LIST)
// ---------------------------


// #Entrada ------------------
// Anima a descida do container de projetos
const slideDownProjectContainer = (container: HTMLElement, duration: number) => {
    animate(container, {
        translateY: ["-100%", "0%"],
        opacity: [0, 1],
        duration: duration,
        delay: 3000,
        ease: cubicBezier(0.155, 0.812, 0.755, 1.01)
    })
}

// Anima a exibição do item de projeto
const showProjectItem = (project: HTMLElement) => {
    animate(project, {
        keyframes: [
            {
                perspective: 500,
                translateY: '-50%',
                rotateY: -90,
                opacity: 0,
                duration: 0
            }, {
                opacity: 0,
                duration: 400
            }, {
                translateY: '0%',
                rotateY: 0,
                opacity: 1,
                duration: 600,
            }
        ],
        ease: "easeInCirc"
    })
}


// #Saída ------------------
// Anima a subida do container de projetos
const slideUpProjectContainer = (container: HTMLElement, duration: number) => {
    animate(container, {
        translateY: ["0%", "-100%"],
        opacity: [1, 0],
        duration: duration,
        ease: cubicBezier(0.652, 0.263, 0.574, 0.914)
    })
}

// Anima a ocultação do item de projeto
const hideProjectItem = (project: HTMLElement) => {
    console.log("Hide Project Item Animation Triggered")
    animate(project, {
        keyframes: [
            {
                perspective: 500,
                translateY: '0%',
                rotateY: 0,
                opacity: 1,
                duration: 0
            }, {
                opacity: 0,
                duration: 400
            },
            {
                translateY: '-100%',
                rotateY: -90,
                opacity: 0,
                duration: 1000
            }
        ],
        ease: "easeInCirc"
    })
}



// #Seleção ------------------
// Realça o projeto com uma animação de subida
const highlightProject = (project: HTMLElement, margin: number) => {
    animate(project, {
        y: `-${margin}px`, // Move para cima
        duration: 1200, // Duração de 1.2s
        ease: cubicBezier(0.111, 0.473, 0.444, 0.989), // Curva de aceleração customizada
        delay: 300 // Aguarda 300ms antes de iniciar
    })
}

// Foca no projeto retirando a animação 3D
const focusOnProject = (container: HTMLElement) => {
    animate(container, {
        rotateX: ["-12deg", "0deg"],
        rotateY: ["-33deg", "0deg"],
        ease: "easeInOutCirc",
        duration: 1000
    })
}

// Reseta a posição de scroll do container para o topo
const resetScrollPosition = (container: HTMLElement) => {
    animate(container, {
        scrollTop: 0, // Volta ao topo
        duration: 1200, // Duração de 1.2s
        ease: cubicBezier(0.111, 0.473, 0.444, 0.989), // Mesma curva de aceleração
        delay: 300 // Aguarda 300ms antes de iniciar
    })
}

export {
    slideDownProjectContainer, showProjectItem, // Animações de entrada
    slideUpProjectContainer, hideProjectItem, // Animação de saída
    highlightProject, focusOnProject, resetScrollPosition // Animações de seleção
}