import React, { useState, useEffect } from "react";
import Title from "./components/Title";
import Input from "./components/Input";
import ItemsList from "./components/ItemsList";

function App() {
  const [data, setData] = useState(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    return items || [];
  });

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(data));
  }, [data]);

  const generateData = (sName, hour) => {
    const newField = { subject: sName, hours: hour };
    const newData = [...data, newField];
    setData(newData);
  };

  return (
    <div className="">
      <Title />
      <Input onAddItems={generateData} />
      <ItemsList transferData={data} />
    </div>
  );
}

export default App;
