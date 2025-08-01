import React from "react";
import { useFormStatus } from "react-dom";

// FormStatusHook: it track the form status, this hook access the form sumission,error,
// status and values.

const handleFun = async () => {
  await new Promise((res) => setTimeout(res, 2000));
  console.log("submit");
};

function FormStatusHook() {
  const { pending } = useFormStatus();

  return (
    <div>
      <form action={handleFun}>
        <input type="text" placeholder="enter text" />
        <input type="password" placeholder="enter password" />
        <button disabled={pending}>
          {pending ? "submiting..." : "submit"}
        </button>
      </form>
    </div>
  );
}

export default FormStatusHook;
