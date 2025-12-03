import {animate, cubicBezier} from "animejs"

const contentFadeIn = (element: HTMLElement) =>{
    animate(element,{
        opacity: [0,1],
        translateY: ['20px','0px'],
        ease: "easeOutCirc"
    })
}

export {contentFadeIn}