# 🚀 Landing Page – Proyecto de Prueba

Este proyecto es una **landing page desarrollada con Vue 3 y Vite**, creada como **proyecto de prueba** para demostrar la maquetación, estructura de componentes, buenas prácticas y optimización del rendimiento en un entorno moderno de desarrollo web.

---

## 🎨 Diseño en Figma

El diseño base de esta landing page está inspirado en el siguiente archivo de Figma:  
👉 [Proyectos Test – Figma](https://www.figma.com/design/wCM8p95n3VVRbjD5uAUwB4/Proyectos-Test?node-id=1-1050&t=z78xoq4qn6PiENDb-0)

---

## 🧠 Descripción del proyecto

La landing page está compuesta por varias secciones independientes (Hero, Servicios, Productos, About, Contacto, etc.) y utiliza un **sistema modular de componentes** desarrollado en Vue 3.  
El objetivo es ofrecer una estructura limpia, escalable y fácilmente mantenible, siguiendo un enfoque de desarrollo moderno con **Vite** para la compilación y optimización.

El proyecto fue desarrollado por **[@naytxi](https://github.com/naytxi)** junto con el apoyo de **IA (ChatGPT)** para la organización, documentación y optimización del código.

---

## 🧩 Tecnologías y dependencias principales

El proyecto utiliza las siguientes tecnologías:

- **[Vue 3](https://vuejs.org/)** → Framework principal.
- **[Vite](https://vitejs.dev/)** → Herramienta de build y servidor de desarrollo rápido.
- **Sass / SCSS** → Preprocesador CSS para estilos estructurados.
- **[@iconify/vue](https://docs.iconify.design/icon-components/vue/)** → Librería de iconos.
- **[vite-plugin-image-optimizer](https://www.npmjs.com/package/vite-plugin-image-optimizer)** → Plugin para optimizar imágenes durante el build.
- **[Sharp](https://sharp.pixelplumbing.com/)** → Librería de procesamiento de imágenes (necesaria para la optimización).

---

## ⚙️ Instalación y configuración

Sigue estos pasos para levantar el proyecto en tu entorno local:

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/naytxi/landing-page.git
   cd landing-page
   npm install
   npm run dev

Para generar una versión optimizada del proyecto:

**    npm run build**

Esto creará la carpeta /dist con todos los archivos minificados y listos para producción.

## 🌐 Visualizar la versión optimizada

Si quieres probar la versión final optimizada en local, sigue estos pasos:

Instala el paquete serve globalmente (solo la primera vez):

**npm install -g serve**


Ejecuta el siguiente comando dentro de la carpeta del proyecto:

**serve -s dist**


Esto levantará un servidor local y podrás visualizar la versión optimizada, simulando un entorno de producción.