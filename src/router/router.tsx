import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorCatch from "../views/Error";

const App = lazy(() => import(/* webpackChunkName: "App" */ "../views/App"));
const Context = lazy(
  () => import(/* webpackChunkName: "Context" */ "../views/Context")
);
const Ref = lazy(() => import("../views/ref"));
const Hoc = lazy(() => import("../views/Hoc"));
const Portals = lazy(() => import("../views/Portals"));
const Hook = lazy(() => import("../views/Hook"));

const Router = () => (
  <ErrorCatch>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/context" component={Context} />
          <Route path="/ref" component={Ref} />
          <Route path="/hoc" component={Hoc} />
          <Route path="/portals" component={Portals} />
          <Route path="/portals" component={Portals} />
          <Route path="/hook" component={Hook} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </ErrorCatch>
);

export default Router;
