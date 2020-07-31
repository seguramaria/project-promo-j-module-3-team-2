### project-promo-j-module-3-team-2

# PROYECTO: Refactorización del proyecto 'Sailor Moon' realizado por el equipo 6 en el módulo anterior.

--

# React Router

## En Index.js :

1. Importamos el componente HashRouter
   `import { HashRouter } from "react-router-dom";`

2. Y renderizamos como children nuestro componente principal CardApp (Para que tenga más coherencia, le cambié el nombre. Lo habíamos importado con el nombre 'App', pero el archivo del componente al que hace referencia la ruta realmente se llama 'CardApp.js')
   `ReactDOM.render( <HashRouter> <CardApp /> </HashRouter>, document.getElementById("root") );`

## En CardApp.js, que el componente principal del proyecto :

3. Inportamos Route y Switch
   `import { Route, Switch } from "react-router-dom";`

4. Añadimos el componente 'Switch' y dentro incluimos las rutas de la página landing (compuesta por 'MainLanding' y 'Footer') y de la página de creación de tarjetas (compuesta por 'Header', 'Main' y 'Footer')
   `<Switch> <Route exact path="/"> <div className="landing"> <MainLanding /> <Footer /> </div> </Route> <Route exact path="/cardApp"> <div className="cardApp"> <Header /> <Main user={user} handleChangeInput={handleChangeInput} /> <Footer /> </div> </Route> </Switch>`

## En MainLanding.js, dónde tenemos el botón que nos lleva a la página de creación de tarjetas: 

5. Inportamos Link
   `import { Link } from "react-router-dom";`

6. Insertamos el compnente 'Link' con la ruta hacia la página de creación de tarjetas
   `<Link to="/cardApp" title="Ir a comenzar"> Comenzar </Link>`

## En Header.js, dónde tenemos el botón que nos lleva a la página landing: 

7. Inportamos Link
   `import { Link } from "react-router-dom";`

8. Insertamos el compnente 'Link' con la ruta hacia landing
   `<Link to="/" title="Home"> <img src={logoawesome} title="Ir a la Home" alt="Awesome Profile Cards Logo" /> </Link>`
