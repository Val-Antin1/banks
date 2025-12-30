# React + Vite

## AI assistant (recommended secure setup)

Important: Do NOT commit your OpenAI secret API key to the repository. Do not embed a secret key in client-side code.

This project includes a minimal frontend chat component at `src/components/AIChat.jsx` and an example serverless endpoint at `api/chat.js` that proxies requests to OpenAI. The serverless endpoint expects the environment variable `OPENAI_API_KEY` to be set in the deployment environment (Vercel, Netlify, etc.).

Local dev and deploy notes:

- For local development with Vercel CLI (recommended to run the serverless endpoint locally):

```bash
# install Vercel if you don't have it
npm i -g vercel

# set your env var locally (do NOT commit this). Example using a shell export
export OPENAI_API_KEY="<your-secret-key-here>"

# run the frontend + serverless funcs locally
vercel dev
```

- For Netlify, use Netlify Functions and set `OPENAI_API_KEY` in the Netlify site settings; the endpoint path will be different.

If you truly must run without any server-side component (NOT RECOMMENDED), be aware the API key will be exposed to anyone who inspects your frontend bundle — do not do this for real keys or production usage.

If you want, I can:
- Add `AIChat` to a page (e.g., `src/pages/Contact.jsx`) and wire it into the app UI.
- Provide a small Express dev server example for local testing.
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
