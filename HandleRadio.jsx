import React, { useState } from "react";

const HandleRadio = () => {
  const [gender, Setgender] = useState("female");
  const [city, Setcity] = useState("sadda");
  return (
    <div>
      <h1>Handle Radio and Dropdown</h1>
      <h2>select gender</h2>
      <input
        type="radio"
        onChange={(e) => Setgender(e.target.value)}
        name="gender"
        value={"male"}
        checked={gender == "male"}
        id="male"
      />
      <label htmlFor="male">Male</label>

      <input
        type="radio"
        onChange={(e) => Setgender(e.target.value)}
        name="gender"
        value={"female"}
        checked={gender == "female"}
        id="female"
      />
      <label htmlFor="female">Female</label>

      <h2>selected gender:{gender}</h2>

      <h1>select city</h1>
      <select defaultValue={"sadda"} onChange={(e) => Setcity(e.target.value)}>
        <option value="sadda">Sadda</option>
        <option value="kohat">Kohat</option>
        <option value="peshawar">Peshawar</option>
      </select>

      <h1>selected city:{city}</h1>
    </div>
  );
};

export default HandleRadio;
