import React, { useState } from "react";
//component
import {
  AddProjectBar,
  Footer,
  Header,
  ProjectCard,
  SearchBarTitle,
} from "../../components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CodeEditor, Designer, DashboardMain } from "../index";

const App = () => {
  const [project, setProject] = useState([]);
  const [state, setState] = useState("SearchBarTitle");

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
        <div>
          {state === "SearchBarTitle" && (
            <SearchBarTitle changeBar={() => setState("AddProjectBar")} />
          )}
          {state === "AddProjectBar" && (
            <AddProjectBar
              addProject={(newProject) => setProject([...project, newProject])}
              changeBar={() => setState("SearchBarTitle")}
            />
          )}
        </div>
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
        {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default App;
