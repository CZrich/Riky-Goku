# 🌌 Uky Wiki - Multiverse Explorer

[![Vercel Deployment](https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel)](https://riky-goku.vercel.app)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Uky Wiki** es una plataforma interactiva diseñada para explorar la convergencia de los universos de **Dragon Ball** y **Rick & Morty**. 

Este proyecto nació como un entorno de experimentación avanzada para dominar el ecosistema moderno de **React**. A través de su desarrollo, se han implementado soluciones a retos comunes de ingeniería de software, como la sincronización de estado asíncrono, la optimización de renders y la validación estricta de datos en el cliente.

---

## 🚀 Lo que aprendí y puse en práctica

- **Gestión de Estado Asíncrono:** Implementación de **TanStack Query v5** para manejar caché, reintentos de peticiones y estados de carga globales.
- **Seguridad en Tipado:** Uso de **TypeScript** junto a **Zod** para garantizar que los datos cumplan con los esquemas esperados, eliminando errores en tiempo de ejecución.
- **Optimización de UI/UX:** Creación de componentes altamente responsivos con **Tailwind CSS**, diseñados con enfoque *Mobile First* y animaciones fluidas.
- **Arquitectura de Hooks:** Desarrollo de lógica reutilizable mediante *Custom Hooks* (como `useMemoryGame`), logrando una separación clara entre lógica y vista.

---

## 🛠️ Stack Tecnológico & Recursos

### Core & Estado
- **React 18 + Vite + TypeScript.**
- **TanStack Query (React Query):** Sincronización de datos.
- **Zod + React Hook Form:** Validación de formularios y esquemas.
- **Axios:** Cliente HTTP con configuración de instancias e interceptores.

### Herramientas de Calidad
- **[React Hot Toast](https://react-hot-toast.com/):** Notificaciones dinámicas para feedback de usuario.
- **[Gitmoji](https://gitmoji.dev/):** Estándar de mensajes de commit para un historial semántico.
- **Tailwind CSS:** Diseño responsivo y animaciones personalizadas.

---

## 🔌 APIs Utilizadas

El proyecto consume datos de las siguientes fuentes abiertas:
- 🐉 **[Dragon Ball API](https://web.dragonball-api.com/):** Información de guerreros, transformaciones y planetas.
- 🧪 **[The Rick and Morty API](https://rickandmortyapi.com/):** Personajes, episodios y localizaciones.

---

## 📦 Instalación y Uso Local

Sigue estos pasos para ejecutar el proyecto en tu máquina local:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/CZrich/Riky-Goku.git

2. **Entrar al directorio:**
    ```bash
    cd riky-goku
3. **Instalar dependencias:**
    ```bash
    npm install
4. **Ejecutar en modo Desarrollo:**
    ```bash
    npm run dev
5. **Producción (Build & Preview):**
    ```bash
   npm run build
   npm run preview
## 🌐 Despliegue en Vercel
El proyecto está configurado para despliegue continuo en Vercel. Puedes ver la versión en vivo aquí:

🔗 https://riky-goku.vercel.app
