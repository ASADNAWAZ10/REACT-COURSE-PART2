import { UseParams } from "react";

const DynamicRouting = () => {
  const userDATA = [
    { id: 1, name: "Asad Nawaz" },
    { id: 1, name: "Sijjad Ahmad" },
    { id: 1, name: "Sabir Khan" },
    { id: 1, name: "Atif Mashal" },
    { id: 1, name: "Habib Rahman" },
  ];

  const paramData = UseParams();
  console.log(paramData.id);

  return (
    <div>
      <h1>user list page</h1>
      {userDATA.map((item) => {
        <h2>
          <Link to={"/user/" + item.id}>{item.name}</Link>
        </h2>;
      })}

      <h3>user detail page</h3>
      <h2>{paramData.id}</h2>
      <Routes>
        <Route path="/user/:id" element={<UserList />} />
      </Routes>
    </div>
  );
};

export default DynamicRouting;
