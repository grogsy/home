import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Projects from "./Projects";

const Routes = props => {
  return (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route component={Landing} />
    </Switch>
  );
};

export default Routes;
