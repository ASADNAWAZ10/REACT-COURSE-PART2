import React, { useActionState } from "react";

function ValidationUseActionState() {
  const hanldeLogin = (prevdata, formdata) => {
    console.log("called");
    let name = formdata.get("name");
    let password = formdata.get("password");
    let regex = /^[A-z0-9]+$/i;

    if (name.length > 5) {
      return {
        error: "name should not more than 5 characters",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        error: "password should be alphabats and numbers",
        name,
        password,
      };
    } else {
      return { message: "Login done", name, password };
    }
  };

  const [data, action] = useActionState(hanldeLogin);
  return (
    <div>
      <h1>Validation with useActionState in react</h1>
      {data?.message && <span style={{ color: "green" }}>{data.message}</span>}
      {data?.error && <span style={{ color: "red" }}>{data.error}</span>}
      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          name="name"
          placeholder="enter  your text"
        />
        <input
          defaultValue={data?.password}
          type="password"
          name="pasword"
          placeholder="enter your password"
        />
        <button>Login</button>
      </form>
    </div>
  );
}

export default ValidationUseActionState;
