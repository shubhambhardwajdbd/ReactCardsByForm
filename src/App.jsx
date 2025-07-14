import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Navbar from "./components/Navbar";

function App() {
  const [users, setUsers] = useState([]);
  const handleFormSubmit = (data) => {
    setUsers([...users, data]);
  };

  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  };

  return (
    <div className="w-full h-screen bg-zinc-300 p-20 pt-0 ">
      <Navbar />
      <div className="container ">
        <Cards users={users} handleRemove={handleRemove} />

        <Form handleFormSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}

export default App;
