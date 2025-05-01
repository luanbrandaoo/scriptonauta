# Scriptonauta

> ⚠️ **Aviso**
>
> Até o momento, apenas a estrutura do projeto e as rotas foram implementadas.  
> A interface atual **não representa o design final** da aplicação — trata-se apenas de uma versão **demonstrativa e temporária** usada para fins de desenvolvimento.


## Estrutura de Pastas

```
src/
├── assets/
├── components/
│   └── constructors/
│       ├── Expository.jsx
│       ├── MultipleChoice.jsx
│       └── ShortAnswer.jsx
├── activities/
│   ├── structure.json
│   └── planetX.json
├── pages/
│   ├── LandingPage.jsx
│   ├── DashboardPage.jsx
│   ├── PlanetPage.jsx
│   ├── ActivitiesPage.jsx
│   └── Error404.jsx
├── services/
│   ├── firebase.js
├── App.jsx
├── routes/
│   ├── AppRoutes.jsx
│   ├── PrivateRoutes.jsx
├── main.jsx
└── index.css
```

---

### `assets/`
Contém imagens, ícones e outros recursos visuais.

---

### `components/`
Componentes e construtores reutilizáveis da interface.
- Como mapa de galáxias, barras de progresso, etc.

#### `components/constructors/`
- `ShortAnswer.jsx`: Monta a atividade de resposta curta passada como propriedade pela página de atividades.
- `Expository.jsx`: Monta a atividade expositiva passada como propriedade pela página de atividades.
- `MultipleChoice.jsx`: Monta a atividade de múltipla escolha passada como propriedade pela página de atividades.

---

### `activities/`
Armazena os arquivos `.json` que descrevem a estrutura do conteúdo e atividades da plataforma.

- `structure.json`: Define a ordem das galáxias e seus planetas.
- `planetX.json`: Cada planeta tem seu próprio arquivo, contendo um array de atividades (texto, tipo, respostas, etc).

---

### `pages/`
Componentes de página inteira, que representam cada rota principal da aplicação.

- `LandingPage.jsx`: Página inicial pública com apresentação da plataforma (se o usuário já estiver logado, redireciona diretamente para a Dashboard).
- `DashboardPage.jsx`: Página do aluno, mostra o progresso, galáxias desbloqueadas e atividades disponíveis.
- `PlanetPage.jsx`: Exibe informações sobre um planeta específico, descrição e assuntos abordados.
- `ActivitiesPage.jsx`: Renderiza as atividades de um determinado planeta, montando os construtores correspondentes.
- `Error404.jsx`: Exibe uma página de erro 404 para rotas inválidas.

---

### `services/`
Contém serviços auxiliares.
- Pode incluir serviços responsáveis por autenticação, chamadas de API, etc.

- `firebase.js`: Arquivo responsável por configurar e exportar as funcionalidades do Firebase para a aplicação.

---

### `routes/`
Arquivos responsáveis por configurar todas as rotas da aplicação.

- Define as rotas principais, como `/`, `/dashboard`, `/:planetId`, e `/:planetId/activities`.
- Possui uma rota "catch-all" para redirecionar rotas inválidas para a página de erro 404.

- `AppRoutes.jsx`: Define as rotas públicas da aplicação e a navegação entre elas.
- `PrivateRoutes.jsx`: Gerencia as rotas privadas, ou seja, aquelas que exigem autenticação para serem acessadas. Caso o usuário não esteja autenticado, ele será redirecionado para a página de login.

- Ao acessar a landing page (`/`), a aplicação verifica se o usuário está autenticado e, se estiver, redireciona automaticamente para o painel de controle (`/dashboard`).

---

### `App.jsx`
Componente principal que inicializa a aplicação as rotas.

---

### `main.jsx`
Renderiza a árvore de componentes React.

---

### `index.css`
Estilos globais da aplicação.

---

## Rodando o projeto

```bash
git clone https://github.com/luanbrandaoo/scriptonauta.git
cd scriptonauta
npm install
npm run dev
```
