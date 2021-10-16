import React, { useState, useRef } from "react";
import "./style.css";
import SelectColor from "../../atoms/selectColor";

const AddProjectBar = (props) => {
  const [project, setProject] = useState([]);
  const [id, setID] = useState(0);
  const refTitle = useRef();
  const handleID = () => {
    setID(id + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleID();
    const newProject = {
      id: id,
      title: refTitle.current.value,
      color: "giallo",
    };
    setProject([...project, newProject]);
    refTitle.current.value = "";
    props.addProject(newProject);
  };

  return (
    <div className="search-main">
      <form className="form-project" onSubmit={handleSubmit}>
        <div className="section-title-wrapper">
          <input
            ref={refTitle}
            className="new-project-input"
            placeholder="Project name"
          />
        </div>
        <div className="addProject">
          <SelectColor />
          <input
            type="submit"
            className="btn-add-project"
            value="+ Aggiungi attività"
          />
        </div>
      </form>
      <div></div>
    </div>
  );
};

export default AddProjectBar;
