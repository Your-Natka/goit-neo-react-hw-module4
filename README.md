# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

mkdir -p src/components/SearchBar
mkdir -p src/components/ImageGallery
mkdir -p src/components/ImageCard
mkdir -p src/components/Loader
mkdir -p src/components/ErrorMessage
mkdir -p src/components/LoadMoreBtn
mkdir -p src/components/ImageModal
mkdir -p src/services

touch src/App.module.css

touch src/components/SearchBar/SearchBar.jsx
touch src/components/SearchBar/SearchBar.module.css

touch src/components/ImageGallery/ImageGallery.jsx
touch src/components/ImageGallery/ImageGallery.module.css

touch src/components/ImageCard/ImageCard.jsx
touch src/components/ImageCard/ImageCard.module.css

touch src/components/Loader/Loader.jsx
touch src/components/Loader/Loader.module.css

touch src/components/ErrorMessage/ErrorMessage.jsx
touch src/components/ErrorMessage/ErrorMessage.module.css

touch src/components/LoadMoreBtn/LoadMoreBtn.jsx
touch src/components/LoadMoreBtn/LoadMoreBtn.module.css

touch src/components/ImageModal/ImageModal.jsx
touch src/components/ImageModal/ImageModal.module.css

touch src/services/api.js
