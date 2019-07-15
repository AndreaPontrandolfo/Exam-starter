import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";

const LandingPage = lazy(() => import(`./views/LandingPage`));

export default (
  <Suspense fallback={<div>Loader...</div>}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      {/* <Route exact path="/catalogo" component={CatalogoVehicleType} />
      <Route
        exact
        path="/catalogo/:vehicle_type"
        component={CatalogoManufacturers}
      />
      <Route
        exact
        path="/catalogo/:vehicle_type/:manufacturer"
        component={CatalogoModels}
      />
      <Route
        exact
        path="/catalogo/:vehicle_type/:manufacturer/:model"
        component={CatalogoVersions}
      />
      <Route
        exact
        path="/catalogo/:vehicle_type/:manufacturer/:model/:version"
        component={CatalogoSpec}
      />
      <Route exact path="/catalogo/products" component={ProductsFound} />
      <Route exact path="/certificati" component={Certificati} />
      <Route exact path="/about" component={AboutUs} />
      <Route exact path="/distributori" component={Distributori} />
      <Route exact path="/contatti" component={Contatti} />
      <Route exact path="/downloads" component={Downloads} />
      <Route exact path="/videos" component={Videos} />
      <Route exact path="/personal" component={Personal} /> */}
    </Switch>
  </Suspense>
);
