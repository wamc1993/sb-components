Esto proyecto fue creado de manera convencional con el comando
npm create-react-app willapp --template= typescript

Luego, se ejecutó en la raiz del proyecto el comando
npm remove react-scripts

y luego, se borraron de forma manual la carpeta public y los archivos en src diferentes a index.tsx

Ejecutamos en la raiz del proyecto el siguiente comando
npx sb init
fuente: https://storybook.js.org/docs/react/get-started/install

Después de seguir los pasos anteriores, el proyecto ya ha dejado de ser un proyecto de React,
y lo podríamos considerar como un proyecto de storybook
De hecho, el npm start ya no funciona D: y en cambio tenemos 2 nuevos scripts en nuestro package.json
npm run storybook
npm run build-storybook

vamos a actualizar la sección de scripts en el package.json,

-   copiando el script de "storybook" y pegandolo en el "start"
-   copiando el script de "build-stotybook" y pegandolo en el "build"
-   borrando los scripts de test y reject

Ahora, borramos el contenido de index.tsx,
y por ahora, hagamos un export de alguno de los componentes de prueba de storybook
export { Button } from "./stories/Button";

Esto no es para que storybook funcione, es porque no queremos renderizar nada fuera de storybook, pero tampoco se puede dejar
vacío al index

Ahora si, corramos el npm start
El proyecto corre y nos muestra una página de inicio de storybook :)

-   En nuestro caso, el proyecto corrió al primer intento, pero al instructor le falló el proyecto porque había que configurar
    el cargue de módulos css. El instructor tuvo que hacer una configuración adicional para configurar postcss y autoprefixer
    (video 158 del curso) que por suerte nosotros no tuvimos que hacer

La página de inicio de storybook está en la siguiente ruta:
http://localhost:6006/

Para probar el sitio estático generado:

-   correr el comando de build storybook. Eto crear una carpeta llamada storybook-static
-   instalar http-server, npm install --global http-server
-   http-server servirá para visualizar el contenido del static generado, para ello:
    -   Posicione la consola en la carpeta storybook-static
    -   Corra el comando, http-server -o

Para subir el repo a github

-   Creamos el repo en github y subimos los cambios
-   como queremos desplegar el sitio estático en github pages, vamos a subir una copia del build, pero por defeto,
    nuestro archivo .gitignore no permite persistir la carpeta storybook-static
-   Vamos a renombrar la carpeta "storybook-static" a "docs"
-   Haremos un 2do commit para persistir la carpeta docs. La carpeta docs la usaremos para el deploy en github pages

Chromatic
https://www.chromatic.com/apps?accountId=6237c16fd28ecb003af14eb2
Esta herramienta facilita la publicación de componentes de storybook
Como parte del ejercicio, nos hemos logueado en chromatic usando nuestra cuenta de github
y hemos seleccionado a este proyecto (el repo que hemos creado en github)

Ahora, es necesario hacer una configuración del lado de proyecto
siguiendo los siguientes pasos:

-   ejecutar este comando, npm install --save-dev chromatic
-   ejecutamos este comando, npx chromatic --project-token=693a221d7821
    el token lo da chromatic
-   Al ejecutar el comando anterior por primera vez, éste mismo comando se agrega al package.json

Listo! ahora, cada vez que queramos publicar en chromatic,

-   actualizamo el build que está en la carpeta docs (npm run build)
-   guardamos los cambios en git
-   Corremos el comando npx chromatic --project-token=693a221d7821, ó, npm run chromatic
