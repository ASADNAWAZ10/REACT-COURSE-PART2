import React, { useActionState } from "react";
// UseActionState: we use this hook to manange form state and handle form action.

const ActionStateHook = () => {
  const [data, action, pending] = useActionState(hanldesubmit, undefined);

  const hanldesubmit = async (prevDate, formdata) => {
    let name = formdata.get("name");
    let password = formdata.get("password");

    await new Promise((res) => setTimeout(res, 3000));
    console.log("hanldesubmit called", name, password);
    if (name && password) {
      return { message: "Date submitted" };
    } else {
      return { error: "failed to submit, enter proper data" };
    }
  };
  return (
    <div>
      <h1>UseActionState Hook in React</h1>
      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          placeholder="Ener your text"
          name="name"
        />
        <input
          defaultValue={data?.password}
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        <button disabled={pending}>submit</button>
      </form>
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
      <h3>Name: {data?.name}</h3>
      <h3>Password:{data?.password}</h3>
    </div>
  );
};

export default ActionStateHook;
