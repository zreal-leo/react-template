import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorCatch from "../views/Error";

const App = lazy(() => import(/* webpackChunkName: "App" */ "../views/App"));
const Context = lazy(
  () => import(/* webpackChunkName: "Context" */ "../views/Context")
);
const Ref = lazy(() => import("../views/ref"));

const Router = () => (
  <ErrorCatch>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/context" component={Context} />
          <Route path="/ref" component={Ref} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </ErrorCatch>
);

export default Router;
