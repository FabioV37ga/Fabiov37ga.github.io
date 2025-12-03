
interface Project {
    title: string;
    technologies?: string[];
    description?: string;
    link?: string;
    github?: string;
}

const nutryo: Project = {
    title: "Nutryo"
}

const sistemaSolar: Project = {
    title: "Sistema Solar"
}

const jsBridge: Project = {
    title: "JSBridge"
}

const conviteAugusto: Project = {
    title: "Convite Augusto"
}

const conviteAlessandra: Project = {
    title: "Convite Alessandra"
}

const birdGame: Project = {
    title: "BirdGame"
}

const bounce: Project = {
    title: "Bounce"
}

const wearSell: Project = {
    title: "WearSell"
}

const driveGuide: Project = {
    title: "DriveGuide"
}

const a:Project = {
    title: "a"
}
const b:Project = {
    title: "b"
}
const c:Project = {
    title: "c"
}
const d:Project = {
    title: "d"
}
const e:Project = {
    title: "e"
}

const Projects: Project[] = [
    nutryo,
    sistemaSolar,
    jsBridge,
    conviteAugusto,
    conviteAlessandra,
    birdGame,
    bounce,
    wearSell,
    driveGuide,
    a,
    b,
    c,
    d,
    e
];

export { Projects, Project };