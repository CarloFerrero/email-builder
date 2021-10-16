import React from "react";
import "./style.css";

const SearchBarTitle = () => {
  const HandleClick = () => {
    console.log("click");
  };
  return (
    <div className="search-main">
      <div className="form-project">
        <div className="section-title-wrapper">
          <h2 className="new-project">Dashboard</h2>
        </div>
        <div className="addProject">
          <input
            onClick={HandleClick}
            type="submit"
            className="btn-add-project"
            value="+ Aggiungi attività"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBarTitle;
