# Portafolio Ismael

Este es un proyecto de portafolio personal creado con React. A continuación, se detallan los pasos necesarios para configurar y ejecutar el proyecto en tu máquina local.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado Visual Studio Code en tu máquina.

Debes instalar un gestor de versiones de Node, NPM y Node.js. Aquí tienes algunas guías:

- Para Windows, descarga NVM desde la [página de lanzamientos de GitHub](https://github.com/coreybutler/nvm-windows/releases/) "nvm-setup.exe".
- Consulta la [guía para descargar e instalar Node.js y NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) en el sitio oficial.

Después de instalar NVM, puedes instalar diferentes versiones de Node.js usando los siguientes pasos:

1. Para instalar las versiones 20, 18 y 16.13.0, ejecuta los siguientes comandos:
   - `nvm install 20`
   - `nvm install 18`
   - `nvm install 16.13.0`
  
2. Para usar una versión específica, ejecuta:
   - `nvm use 18`

3. Para encontrar las versiones que tienes instaladas, utiliza:
   - `nvm ls`

4. Para ver qué versión estás utilizando actualmente, ejecuta:
   - `nvm current`

## Pasos para Crear el Proyecto

1. **Crear la aplicación de React**:
   - Abre tu terminal o consola de comandos.
   - Escribe el siguiente comando para crear una nueva aplicación de React llamada `portafolio_ismael`:
     ```
     npx create-react-app portafolio_ismael
     ```

2. **Acceder al directorio del proyecto**:
   - Después de que la creación de la aplicación se complete, navega al directorio del proyecto ejecutando:
     ```
     cd portafolio_ismael
     ```

3. **Instalación de dependencias**:
   - Para instalar las dependencias necesarias, asegúrate de ejecutar el siguiente comando:
     ```
     npm install
     ```

4. **Iniciar el servidor de desarrollo**:
   - Una vez dentro del directorio, inicia el servidor de desarrollo para ver tu aplicación en el navegador. Escribe el siguiente comando:
     ```
     npm start
     ```

### Instalación de Dependencias Adicionales

Para enriquecer tu proyecto, considera instalar las siguientes bibliotecas:

- **React Router**:
  - Para habilitar la navegación entre diferentes páginas (como Landing Page, Portafolio, Contacto, etc.), instala React Router ejecutando:
    ```
    npm install react-router-dom
    ```

- **React Icons**:
  - Para incorporar iconos en tu proyecto, instala la biblioteca de iconos con el siguiente comando:
    ```
    npm install react-icons
    ```

- **Descargar y abrir archivos PDF**:
  - Si deseas manejar archivos PDF en tu proyecto, instala las siguientes bibliotecas:
    ```
    npm install react-native-fs react-native-file-viewer
    ```

## Comandos Adicionales

- **Ejecutar pruebas**:
  - Para ejecutar las pruebas de tu aplicación, usa el siguiente comando:
    ```
    npm test
    ```

- **Crear una versión optimizada para producción**:
  - Para construir la aplicación para producción, utiliza:
    ```
    npm run build
    ```

- **Eyectar la configuración de Create React App**:
  - Si necesitas tener control completo sobre la configuración de webpack, puedes eyectar el proyecto con:
    ```
    npm run eject
    ```
  - Ten en cuenta que este comando es irreversible.

## Estructura del Proyecto

Una vez que hayas configurado el proyecto, la estructura de carpetas y archivos debería verse similar a esta:

<!-- ULTIMO -->

### Descripción de las Carpetas:

<!-- - `node_modules/`: Contiene todas las dependencias instaladas.
- `public/`: Archivos públicos que se servirán directamente.
- `src/`: Aquí es donde se encuentra el código fuente de tu aplicación.
  - `assets/`: Recursos como imágenes y archivos estáticos.
  - `components/`: Componentes reutilizables de tu aplicación.
  - `pages/`: Diferentes páginas que componen tu portafolio.
  - `App.js`: Componente principal de la aplicación.
  - `index.js`: Punto de entrada de tu aplicación. -->

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar un pull request. Todas las contribuciones son bienvenidas.

## Licencia

Este proyecto está bajo la Licencia MIT.