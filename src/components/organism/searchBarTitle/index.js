import React from "react";
import AddProjectBar from "../AddProjectBar";
import "./style.css";
import Button from "@mui/material/Button";

const SearchBarTitle = (props) => {
  return (
    <div className="search-main">
      <div className="form-project">
        <div className="section-title-wrapper">
          <h2 className="new-project">Dashboard</h2>
        </div>
        <div className="addProject">
          <Button variant="outlined" onClick={props.changeBar} type="submit">
            Nuovo progetto
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarTitle;
