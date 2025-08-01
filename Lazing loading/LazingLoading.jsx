import React, { lazy, Suspense, useState } from "react";
// import User from "./User";
const User = lazy(() => import("./User"));

// lazy load is technique where we load our components when it's become need.

const LazingLoading = () => {
  const [loading, setloading] = useState(false);
  return (
    <div>
      {loading ? (
        <Suspense fallback={<h2>loading.....</h2>}>
          <User />
        </Suspense>
      ) : null}
      <button onClick={() => setloading(true)}>Load User</button>
    </div>
  );
};

export default LazingLoading;
