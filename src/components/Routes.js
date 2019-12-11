import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Projects from "./Projects";
import ContactMe from "./Contact";
import Resume from "./Resume";

const Routes = props => {
  return (
    <Switch>
      <Route path="/projects" component={Projects} />
      <Route path="/contact" component={ContactMe} />
      <Route path="/resume" component={Resume} />
      <Route component={Landing} />
    </Switch>
  );
};

export default Routes;
