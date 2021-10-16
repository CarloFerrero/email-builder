import React, { useState } from "react";
import Select from "react-select";

const options = [
  { value: "rosso", label: "rosso" },
  { value: "blu", label: "blu" },
  { value: "verde", label: "verde" },
  { value: "giallo", label: "giallo" },
];

function SelectColor() {
  const [color, setColor] = useState("");

  const handleChange = (e) => {
    setColor("giallo");
    console.log(color);
  };

  const { selectedOption } = color;

  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      placeholder="Colore campagna"
    />
  );
}

export default SelectColor;
