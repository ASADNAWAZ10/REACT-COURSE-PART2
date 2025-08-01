import React, { useReducer } from "react";

//Reducer is a function which update the state.

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};

const reducer = (data, action) => {
  console.log(data, action);
  return { ...data, [action.type]: action.val };
};
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, emptyData);
  return (
    <div>
      <h1>Use Reducer</h1>
      <input
        type="text"
        onChange={(e) => dispatch({ val: e.target.value, type: "name" })}
        placeholder="enter your name"
      />
      <input
        type="password"
        onChange={(e) => dispatch({ val: e.target.value, type: "password" })}
        placeholder="enter text"
      />
      <input
        type="email"
        onChange={(e) => dispatch({ val: e.target.value, type: "email" })}
        placeholder="enter text"
      />
      <input
        type="email"
        onChange={(e) => dispatch({ val: e.target.value, type: "city" })}
        placeholder="enter text"
      />
      <input
        type="email"
        onChange={(e) => dispatch({ val: e.target.value, type: "address" })}
        placeholder="enter text"
      />
      <ul>
        <li>Name:{state.name}</li>
        <li>password:{state.password}</li>
        <li>Email:{state.email}</li>
        <li>City:{state.city}</li>
        <li>Address:{state.address}</li>
      </ul>
      <button onClick={() => console.log(state)}>Add details</button>
    </div>
  );
};

export default Reducer;
