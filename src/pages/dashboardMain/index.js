import React from "react";
import "./style.css";
// Component import
import { ComponentCard, LayoutCard, SectionTitle } from "../../components";

const DashboardMain = (props) => {
  const ProjectUpdated = props.project;

  return (
    <div className="main">
      <div className="space"></div>
      <SectionTitle title="Progetti" />
      <div className="project-wrapper">{ProjectUpdated}</div>
      <SectionTitle title="Componenti" />
      <ComponentCard />
      <SectionTitle title="Layout" />
      <LayoutCard />
      <SectionTitle title="Partial" />
      <LayoutCard />
    </div>
  );
};

export default DashboardMain;
