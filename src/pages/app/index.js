import React, { useState } from "react";
//component
import { AddProjectBar, Footer, Header, ProjectCard } from "../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CodeEditor, Designer, DashboardMain } from "../index";

const App = () => {
  const [project, setProject] = useState([]);
  const addProject = (newProject) => {
    setProject([...project, newProject]);
  };

  const listProjectCard = project.map((prop) => (
    <ProjectCard
      title={prop.title}
      color={prop.color}
      id={prop.id}
      key={prop.id}
    />
  ));

  return (
    <div>
      <Router>
        <Header />
        <AddProjectBar addProject={addProject} />
        <Switch>
          <Route path="/code-editor">
            <CodeEditor />
          </Route>
          <Route path="/designer">
            <Designer />
          </Route>
          <Route exact path="/">
            <DashboardMain project={listProjectCard} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
