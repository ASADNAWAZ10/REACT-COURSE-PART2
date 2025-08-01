import React, { useEffect, useState } from "react";

const FetchAPI = () => {
  const [userData, setuserData] = useState([]);
  
  useEffect(() => {
    getUserData();
  }, []);

  async function getUserData() {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    setuserData(response.users);
  }
  console.log(userData);

  return (
    <div>
      <h1>fetch data from API</h1>
      {userData &&
        userData.map((user) => {
          <h2>{user.firstName}</h2>;
          <h2>{user.lastName}</h2>;
          <h2>{user.age}</h2>;
        })}
    </div>
  );
};

export default FetchAPI;
