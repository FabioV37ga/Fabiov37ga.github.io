# Portfólio v3.0 - Fábio Veiga

[![Demo Online](https://img.shields.io/badge/demo-online-success?style=for-the-badge)](https://fabioveiga.onrender.com)
[![Versão](https://img.shields.io/badge/versão-3.0.0-blue?style=for-the-badge)](https://github.com/FabioV37ga/Fabiov37ga.github.io)
[![Licença](https://img.shields.io/badge/licença-ISC-green?style=for-the-badge)](LICENSE)

> Portfólio pessoal apresentando projetos, habilidades e experiência profissional com tecnologias web modernas e animações suaves.

---

## 📋 Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Primeiros Passos](#primeiros-passos)
- [Build & Deploy](#build--deploy)
- [Arquitetura](#arquitetura)
- [Contribuindo](#contribuindo)
- [Licença](#licença)

---

## 🎯 Visão Geral

Terceira iteração do meu portfólio pessoal construído com foco em performance, manutenibilidade e experiência do usuário. O projeto apresenta uma arquitetura limpa inspirada em MVC, animações suaves e design responsivo.

**Demo Online:** [fabioveiga.onrender.com](https://fabioveiga.onrender.com)

---

## ✨ Funcionalidades

- ✅ **Arquitetura Moderna** - Padrão inspirado em MVC com Controllers, Views e Selectors
- ✅ **Animações Suaves** - Powered by Anime.js para transições e efeitos fluidos
- ✅ **Design Responsivo** - Abordagem mobile-first com layouts adaptativos
- ✅ **Type Safety** - Construído com TypeScript para código robusto
- ✅ **Build Rápido** - Desenvolvimento e builds de produção com Vite
- ✅ **Exibição Dinâmica de Projetos** - Showcase de projetos com tecnologias, descrições e links
- ✅ **Assets Otimizados** - Otimização de imagens e lazy loading
- ✅ **Sistema de Navegação** - Transições suaves entre seções com gerenciamento de cooldown
- ✅ **Sistema de Templates** - Templates nanohtml reutilizáveis para UI consistente

---

## 🛠️ Tecnologias

### Stack Principal

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

### Bibliotecas & Ferramentas

| Tecnologia | Propósito | Versão |
|------------|-----------|--------|
| **Anime.js** | Biblioteca de animação | ^4.2.2 |
| **Umbrella.js** | Manipulação DOM leve | ^3.3.3 |
| **nanohtml** | Tagged template literals para HTML | ^1.10.0 |
| **Node.js** | Runtime JavaScript | >=18.0.0 |
| **Vite** | Build tool e dev server | ^7.2.4 |

---

## 📁 Estrutura do Projeto

```
Fabiov37ga.github.io/
├── index.html                # Página de carregamento para GitHub Pages
├── src/
│   ├── index.html              # Ponto de entrada (Vite)
│   ├── app.ts                  # Bootstrap da aplicação
│   ├── public/                 # Assets estáticos (copiados para dist)
│   │   └── images/
│   │       ├── icons/          # Ícones da UI
│   │       └── background/     # Imagens de fundo
│   ├── controllers/            # Lógica de negócio & tratamento de eventos
│   │   ├── aboutController.ts
│   │   ├── contactController.ts
│   │   ├── containerController.ts
│   │   ├── navigationController.ts
│   │   ├── projectController.ts
│   │   ├── projectListController.ts
│   │   └── welcomeController.ts
│   ├── views/                  # Manipulação DOM & renderização
│   │   ├── aboutView.ts
│   │   ├── contactView.ts
│   │   ├── containerView.ts
│   │   ├── navigationView.ts
│   │   ├── projectListView.ts
│   │   ├── projectView.ts
│   │   └── welcomeView.ts
│   ├── selectors/              # Seleção de elementos DOM
│   │   ├── aboutSelector.ts
│   │   ├── contactSelector.ts
│   │   ├── containerSelector.ts
│   │   ├── navigationSelector.ts
│   │   ├── projectListSelector.ts
│   │   ├── projectSelector.ts
│   │   └── welcomeSelector.ts
│   ├── templates/              # Templates HTML reutilizáveis
│   │   ├── paragraphTemplate.ts
│   │   ├── projectListTemplate.ts
│   │   ├── projectTemplate.ts
│   │   └── technologiesTemplate.ts
│   ├── data/                   # Dados estáticos & tipos
│   │   └── projects.ts         # Informações dos projetos
│   ├── utils/                  # Funções auxiliares
│   │   ├── aboutAnimations.ts
│   │   ├── animation.ts
│   │   ├── contactAnimations.ts
│   │   ├── navigationAnimations.ts
│   │   ├── projectDisplayAnimations.ts
│   │   ├── projectListAnimations.ts
│   │   └── welcomeAnimations.ts
│   └── styles/                 # Módulos CSS
│       ├── reset.css
│       ├── document.css
│       ├── background.css
│       ├── menu.css
│       ├── container.css
│       ├── welcome.css
│       ├── about.css
│       ├── contact.css
│       ├── projectList.css
│       └── projectDisplay.css
├── dist/                       # Output do build de produção
├── vite.config.ts             # Configuração do Vite
├── tsconfig.json              # Configuração do TypeScript
├── package.json               # Dependências & scripts
└── README.md                  # Documentação

```

---

## 🚀 Primeiros Passos

### Pré-requisitos

- **Node.js** >= 18.0.0
- **npm** ou **yarn** ou **pnpm**

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/FabioV37ga/Fabiov37ga.github.io.git
   cd Fabiov37ga.github.io
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```

4. **Abra o navegador**
   
   Navegue até `http://localhost:3000`

---

## 🏗️ Build & Deploy

### Desenvolvimento

```bash
npm start          # Inicia dev server com HMR
```

### Build de Produção

```bash
npm run build      # Build para produção → dist/
npm run preview    # Preview do build de produção localmente
```

### Deploy

O projeto está configurado para deploy em:
- **GitHub Pages** (via pasta `dist/`)
- **Render** (configurado com `allowedHosts`)
- Qualquer serviço de hospedagem estática

**Output do build:** diretório `dist/`

---

## 🏛️ Arquitetura

### Padrão Inspirado em MVC

```
┌─────────────┐
│  Templates  │ ← Geração de HTML (nanohtml)
└─────────────┘
       ↑
┌─────────────┐       ┌─────────────┐
│ Controllers │ ←───→ │    Views    │
└─────────────┘       └─────────────┘
       ↑                      ↑
       │                      │
┌─────────────┐       ┌─────────────┐
│  Selectors  │       │    Data     │
└─────────────┘       └─────────────┘
```

**Controllers:** Gerenciam interações do usuário, estado e coordenam views  
**Views:** Manipulam DOM, disparam animações, atualizam UI  
**Selectors:** Consultam e armazenam elementos DOM em cache  
**Templates:** Geram componentes HTML reutilizáveis  
**Utils:** Gerenciamento de animações, timing, helpers

### Decisões de Design Chave

- **Sistema de Cooldown:** Previne conflitos de animação durante transições
- **Instâncias Estáticas:** Controllers usam padrão singleton para acesso global
- **Template Literals:** nanohtml para geração de HTML type-safe
- **CSS Modular:** Stylesheets com escopo de componente
- **Assets Públicos:** Arquivos estáticos em `src/public/` copiados para `dist/`

---

## 📝 Scripts Disponíveis

| Script | Descrição |
|--------|-----------|
| `npm start` | Inicia servidor de desenvolvimento Vite na porta 3000 |
| `npm run build` | Build para produção (output: `dist/`) |
| `npm run preview` | Preview do build de produção localmente |

---

## 🎨 Customização

### Adicionando Novos Projetos

Edite `src/data/projects.ts`:

```typescript
import { Technologies } from "../templates/technologiesTemplate.js";
import html from "nanohtml";

const meuProjeto: Project = {
    title: "Nome do Projeto",
    technologies: [
        Technologies.typescript,
        Technologies.react,
        Technologies.nodejs
    ],
    description: html`Descrição do projeto com suporte a <br> HTML`,
    link: "https://demo.example.com",
    github: "https://github.com/usuario/repo"
}

// Adicione ao array Projects
const Projects: Project[] = [
    meuProjeto,
    // ... outros projetos
];
```

### Adicionando Novas Tecnologias

Edite `src/templates/technologiesTemplate.ts`:

```typescript
const novaTech = () => html`
    <li>
        <img src="https://img.shields.io/badge/Tech-COR?style=for-the-badge&logo=tech&logoColor=white" alt="Tech">
    </li>
`

export const Technologies = {
    // ... existentes
    novaTech: novaTech()
}
```

---

## 🤝 Contribuindo

Contribuições, issues e solicitações de recursos são bem-vindos!

1. Faça um Fork do repositório
2. Crie sua branch de feature (`git checkout -b feature/RecursoIncrivel`)
3. Commit suas mudanças (`git commit -m 'Adiciona RecursoIncrivel'`)
4. Push para a branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está licenciado sob a **Licença ISC**.

---

## 👤 Autor

**Fábio Veiga**

- GitHub: [@FabioV37ga](https://github.com/FabioV37ga)
- Portfólio: [fabioveiga.onrender.com](https://fabioveiga.onrender.com)

---

## 🙏 Agradecimentos

- [Anime.js](https://animejs.com/) - Biblioteca de animação
- [Umbrella JS](https://umbrellajs.com/) - Biblioteca DOM leve
- [Vite](https://vitejs.dev/) - Ferramenta de frontend de próxima geração
- [Shields.io](https://shields.io/) - Geração de badges

---

<div align="center">
  <sub>Construído com ❤️ por Fábio Veiga</sub>
</div>
