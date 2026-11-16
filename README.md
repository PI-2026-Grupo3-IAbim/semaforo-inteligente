# Conexões — Projeto Integrador

Site estático do grupo para o componente de Linguagem de Apresentação e Estruturação de Conteúdo (LAEC), no IFPR. O projeto reúne as histórias dos integrantes, informações sobre os locais onde vivem, a macroárea Ciência e Tecnologia dos Temas Contemporâneos Transversais (TCTs) e a crônica **“Sinal Perdido”**.

## Estrutura

```text
/
├── index.html
├── sobre-nos.html
├── sobre-bruno.html
├── sobre-isaque.html
├── sobre-mayki.html
├── onde-vivemos.html
├── tcts.html
├── cronica.html
├── assets/
│   ├── css/estilo.css
│   ├── img/
│   └── js/tema.js
└── en/
    ├── index.html
    ├── sobre-nos.html
    ├── sobre-bruno.html
    ├── sobre-isaque.html
    ├── sobre-mayki.html
    ├── onde-vivemos.html
    ├── tcts.html
    └── cronica.html
```

Os nomes de arquivos e pastas devem permanecer em minúsculas, sem espaços e sem acentos. Imagens ficam em `assets/img/`; estilos, em `assets/css/`; scripts, em `assets/js/`. As páginas da pasta `en/` mantêm os mesmos nomes das páginas em português e usam caminhos relativos (`../assets/...`).

## Recursos do site

- Navegação entre Início, Sobre nós, Onde vivemos, TCTs e Crônica.
- Perfis individuais com nascimento, trajetória escolar, fato histórico próximo à data de nascimento, momento atual, perspectivas e interesses.
- Páginas equivalentes em português e inglês.
- Botão de tema claro/escuro em todas as páginas; a aparência é definida por variáveis CSS e a escolha fica salva no navegador.
- Galeria horizontal com navegação por atalhos, sem JavaScript.
- Layout responsivo, foco visível para teclado e link para pular ao conteúdo.

## Publicação no GitHub Pages

1. Crie ou use o repositório público do grupo na Organização do GitHub e mantenha esta estrutura na raiz da branch `main`.
2. Em **Settings → Pages**, escolha **Deploy from a branch**, selecione `main` e a pasta `/ (root)`, e salve.
3. Aguarde a publicação indicada pelo GitHub Pages e teste `index.html`, a navegação, as imagens, a galeria, os idiomas e os dois temas.
4. Compartilhe o endereço publicado no Classroom conforme a orientação do componente.

Este diretório local não está conectado a um repositório Git remoto; portanto, a criação do repositório na Organização, os colaboradores, os Pull Requests, a configuração do Pages e o compartilhamento do quadro Trello precisam ser feitos pelos integrantes/líder do grupo.

## Fluxo de colaboração e Trello

- Cada integrante trabalha em uma branch com seu nome; as mensagens de commit devem ser descritivas e em português.
- Abra um Pull Request da branch individual para `main`; peça revisão e só integre após aprovação.
- No Trello, use as listas **Backlog**, **Em Progresso**, **Em Revisão** e **Concluído**. Cada entrega deve ter responsável, prazo e checklist; atualize o card quando o PR for aberto, revisado e integrado.
- Compartilhe o quadro com o docente e registre nele a divisão das tarefas coletivas dos TCTs e da revisão do site.

## Pendências para a validação do grupo

- Revisar e aprovar os textos pessoais e as traduções com cada integrante, mantendo a autoria individual indicada nos commits.
- Completar fontes oficiais para os textos sobre os municípios e bairros.
- Produzir e publicar os vídeos autorais exigidos para as seções pessoais e selecionar um vídeo específico para TCTs. Os links atuais de vídeo são pesquisas de referência, não vídeos incorporados ou escolhidos pelo grupo.
- Confirmar os cards, prazos, responsáveis, colaboradores e publicação do GitHub Pages no Trello/GitHub reais.
