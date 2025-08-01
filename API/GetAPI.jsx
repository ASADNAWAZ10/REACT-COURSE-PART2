import React, { useEffect, useState } from "react";

const GetAPI = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    getuserdata();
  }, []);

  const getuserdata = async () => {
    const url = "http://localhost:3000/users";
    let Response = await fetch(url);
    let response2 = Response.json();
    console.log(response2);
    setdata(response2);
    setloading(false);
  };
  return <div>{!loading ? <h1>{data}</h1> : <h1>Loading.....</h1>}</div>;
};

export default GetAPI;
