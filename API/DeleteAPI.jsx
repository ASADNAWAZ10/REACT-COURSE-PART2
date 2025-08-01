import React from "react";

const DeleteAPI = () => {
  const url = "http://localhost:3000/users";

  const DelteUser = async (id) => {
    const data = await fetch(url + "/" + id, {
      method: "delete",
    });
    const response = await data.json();
    if (response) {
      alert("delete sucessfully");
    }
  };
  return (
    <div>
      <button onChange={DelteUser()}>Delete</button>
    </div>
  );
};

export default DeleteAPI;
