import React, { useState } from "react";

const UpdateObject = () => {
  const [data, setData] = useState({
    name: "Asad",
    address: {
      city: "Sadda",
      country: "pakistan",
    },
  });

  const handleObj = (val) => {
    data.name = val;
    console.log(data);

    setData({ ...data });
  };

  const hanldecity = (city) => {
    data.address.city = city;
    console.log(data);
    setData({ ...data, address: { ...data.address.city } });
  };
  return (
    <div>
      <h1>updating object in state</h1>
      <input
        type="text"
        placeholder="enter name"
        onChange={(e) => handleObj(e.target.value)}
      />
      <input
        type="text"
        onChange={(e) => hanldecity(e.target.value)}
        placeholder="enter city"
      />
      <h2>Name:{data.name}</h2>
      <h2>City:{data.address.city}</h2>
      <h2>Country:{data.address.country}</h2>
      <button onClick={handleObj}>updateObj</button>
    </div>
  );
};

export default UpdateObject;
