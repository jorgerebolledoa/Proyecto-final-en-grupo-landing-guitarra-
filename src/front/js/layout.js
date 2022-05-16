import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Producto } from "./pages/producto";
import { Comparar } from "./pages/comparar";
import { X250page } from "./pages/X250";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { CarroDeCompras } from "./component/carroDeCompras/carrodecompras.jsx";
import { CarroDeComprasVacio } from "./component/carroDeCompras/vistaCarroVacio.jsx";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Producto">
              <Producto />
            </Route>
            <Route exact path="/X250">
              <X250page />
            </Route>
            <Route exact path="/Comparar">
              <Comparar />
            </Route>
            <Route path="/carroDeCompras">
              <CarroDeCompras />
            </Route>
            <Route path="carroDeComprasVacio">
              <CarroDeComprasVacio />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
