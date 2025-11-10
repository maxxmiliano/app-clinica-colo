# TreinaPlus — Starter Expo + Firebase

Este projeto é um template mínimo para o seu app **TreinaPlus** (mobile + web via Expo), com autenticação (email/senha), lista de vídeos, player e registro de progresso usando Firebase.

## Passos rápidos
1. Instale Node.js (LTS) e VS Code.
2. Extraia este zip e abra a pasta no VS Code.
3. No terminal do projeto rode:

```bash
npm install
npx expo start
```

4. Antes de rodar: abra `firebase.js` e coloque as configurações do seu projeto Firebase (veja comentário no arquivo).

## Principais arquivos
- `App.js` — navegação e inicialização.
- `firebase.js` — configuração do Firebase (substitua pelos seus valores).
- `screens/` — telas: Login, lista de vídeos, player, upload.
- `components/VideoCard.js` — cartão de vídeo.

Se quiser, eu posso te guiar para criar o projeto no console do Firebase passo a passo.
