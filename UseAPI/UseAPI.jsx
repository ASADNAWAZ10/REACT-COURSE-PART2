import React, { Suspense } from "react";
import { use } from "react";

const fetchData = () =>
  fetch("https://dummyjson.com/users").then((Response) => Response.json());
const UserResource = fetchData();

function UseAPI() {
  return (
    <div>
      <h1>use API in React.js</h1>
      <Suspense fallback={<h2>loading.........</h2>}>
        <User UserResource={UserResource} />
      </Suspense>
    </div>
  );
}

const User = ({ UserResource }) => {
  const UsersData = use(UserResource);
  console.log(UsersData.Users);

  return (
    <div>
      <h1>User list</h1>;
      {UsersData?.users?.map((user) => {
        <h1>{user.firstName}</h1>;
      })}
    </div>
  );
};
export default UseAPI;
