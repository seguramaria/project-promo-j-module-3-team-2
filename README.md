<img src="https://raw.githubusercontent.com/seguramaria/sailormooncards/master/src/images/5.png" width="150"/>

# Sailor Moon Cards

## PROYECTO colaborativo: 'Sailor Moon' refactorización y uso de React.

### Código heredado.

Enlace al anterior proyecto que se ha refactorizado: https://github.com/Adalab/project-module-2-group-6

Se trata de un trabajo que nos viene dado, con código heredado, escrito por otro equipo en el Bootcamp de Adalab sobre el que tenemos que trabajar. En este caso trabajaremos sobre un generador de tarjetas interactivas realizado con Javascript Vanilla y lo pasaremos a React.

### Especificaciones

- Se parte de un proyecto funcional y se realiza una refactorización del código incluyendo el uso de React. Refactorizar código consiste en modificar un código para mejorar su estructura pero sin añadir nuevas funcionalidades.
- De cara a la refactorización, el proyecto usas estas tecnologías:
  Uso de Sass para los estilos
  Uso de ES6 y React para la estructuración del JS de la aplicación
  Uso de mediaqueries para que el diseño sea adaptable al dispositivo
  Desarrollo usando la estrategia mobile first
  Uso de git para el control de versiones del proyecto, con ramas y pull-requests para revisar los cambios de las compañeras
  Publicación del resultado en Internet usando GitHub Pages
- La webapp deberá tener las siguientes nuevas características:
  Usa transiciones y/o animaciones para mejorar interacciones con la aplicación
  Se implementa con una navegación entre distintas páginas de la aplicación usando React router

### Planificación técnica, pasos dados en el proyecto

#### Primero paso. Análisis del proyecto

Usamos dos repositorios:
El repo del proyecto que nos hayan asignado, donde trabajaremos en una rama para entender y mejorar el código heredado. Esto quiere decir que sí podemos modificar el repo antiguo, pero sin tocar la rama master.
Un nuevo repo con el proyecto de React.
Analizamos y probamos el código y entendimos su estructura para poder adaptarla a nuestras necesidades y conocimientos.
Solucionamos errores detectados en el código.
Implementamos mejoras en el código heredado, sin modificar la funcionalidad (hacer las funciones más pequeñas, usar métodos funcionales, mejorar el nombrado, etc.).

#### Segundo paso. Maquetación con React de la página de la herramienta

Definimos la estructura de componentes React de la aplicación.
Generamos los componentes del proyecto y comunicamos información mediante props.

#### Tercero. Versión completa con React

Realizamos la interactividad, usando el estado y los eventos de React.
Implementamos la comunicación con el backend, la función de compartir y offline.

#### Cuarta. Mejoras finales

Creamos la página de landing.
Revisamos el código y realizamos pruebas.
Implementamos las rutas con React router.

#### React Router

###### En Index.js :

1. Importamos el componente HashRouter
   `import { HashRouter } from "react-router-dom";`

2. Y renderizamos como children nuestro componente principal CardApp (Para que tenga más coherencia, le cambié el nombre. Lo habíamos importado con el nombre 'App', pero el archivo del componente al que hace referencia la ruta realmente se llama 'CardApp.js')
   `ReactDOM.render( <HashRouter> <CardApp /> </HashRouter>, document.getElementById("root") );`

###### En CardApp.js, que el componente principal del proyecto :

3. Inportamos Route y Switch
   `import { Route, Switch } from "react-router-dom";`

4. Añadimos el componente 'Switch' y dentro incluimos las rutas de la página landing (compuesta por 'MainLanding' y 'Footer') y de la página de creación de tarjetas (compuesta por 'Header', 'Main' y 'Footer')
   `<Switch> <Route exact path="/"> <div className="landing"> <MainLanding /> <Footer /> </div> </Route> <Route exact path="/cardApp"> <div className="cardApp"> <Header /> <Main user={user} handleChangeInput={handleChangeInput} /> <Footer /> </div> </Route> </Switch>`

###### En MainLanding.js, dónde tenemos el botón que nos lleva a la página de creación de tarjetas

5. Inportamos Link
   `import { Link } from "react-router-dom";`

6. Insertamos el compnente 'Link' con la ruta hacia la página de creación de tarjetas
   `<Link to="/cardApp" title="Ir a comenzar"> Comenzar </Link>`

###### En Header.js, dónde tenemos el botón que nos lleva a la página landing

7. Inportamos Link
   `import { Link } from "react-router-dom";`

8. Insertamos el compnente 'Link' con la ruta hacia landing
   `<Link to="/" title="Home"> <img src={logoawesome} title="Ir a la Home" alt="Awesome Profile Cards Logo" /> </Link>`

Enlace a GitHub Pages para ver el resultado: http://beta.adalab.es/project-promo-j-module-3-team-2/#/
