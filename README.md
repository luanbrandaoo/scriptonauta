# Scriptonauta


## Estrutura de Pastas

```
src/
├── assets/
├── components/
│   └── construtores/
├── atividades/
├── pages/
├── services/
├── App.jsx
├── main.jsx
└── index.css
```

---

### `assets/`
Contém imagens, ícones, e outros recursos visuais.

---

### `components/`
Componentes e construtores reutilizáveis da interface.
- Como mapa de galáxias, barras de progresso, etc.

#### `components/construtores/`
- `AbertaCurta.jsx`: Monta a atividade de resposta aberta e curta passada com propiedade pela página Atividades.
- `Expositiva.jsx`: Monta a atividade de resposta aberta e curta passada com propiedade pela página Atividades.
- `MultiplaEscolha.jsx`: Monta a atividade de resposta aberta e curta passada com propiedade pela página Atividades.


---

### `atividades/`
Armazena os arquivos `.json` que descrevem a estrutura do conteúdo e atividades da plataforma.

- `estrutura.json`: Define a ordem das galáxias e seus planetas.
- `planetaX.json`: Cada planeta tem seu próprio arquivo, contendo um array de atividades (texto, tipo, respostas, etc).

---

### `pages/`
Componentes de página inteira, que representam cada rota principal da aplicação.

- `LandingPage.jsx`: Página inicial pública com apresentação da plataforma (se o usuário já estiver logado, redirecionar direto para a Dashboard).
- `Dashboard.jsx`: Página do aluno, mostra o progresso, galáxias desbloqueadas, e atividades disponíveis.
- `Atividade.jsx`: Renderiza as atividades de um determinado planeta, montando os construtores correspondentes.

Futuramente será adicionada uma `Login.jsx`: Tela de autenticação do usuário.

---

### `services/`
Contém serviços auxiliares.

- Pode ser adicionado o serviço responsável por autenticação, etc.

---

### `App.jsx`
Componente principal.

---

### `main.jsx`
Renderiza a árvore React.

---

### `index.css`
Estilos globais da aplicação.

---

## Rodando o projeto

```bash
npm install
npm run dev
```
