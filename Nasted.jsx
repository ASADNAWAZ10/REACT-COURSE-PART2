import React from "react";

const Nasted = () => {
  const collegeName = [
    {
      name: "APSACS",
      city: "sargodha",
      website: "www.APSACS.com",
      student: [
        {
          name: "Asad Nawaz",
          age: 23,
          email: "asadnawaz211@gamil.com",
        },
        {
          name: "Ali",
          age: 18,
          email: "ali211@gamil.com",
        },
        {
          name: "Umar",
          age: 19,
          email: "Umar211@gamil.com",
        },
      ],
    },
    {
      name: "Degree college",
      city: "sadda",
      website: "www.degreecollege.com",
      student: [
        {
          name: "Asad Nawaz",
          age: 23,
          email: "asadnawaz211@gamil.com",
        },
        {
          name: "Ali",
          age: 18,
          email: "ali211@gamil.com",
        },
        {
          name: "Umar",
          age: 19,
          email: "Umar211@gamil.com",
        },
      ],
    },
    {
      name: "islamia college",
      city: "peshawar",
      website: "www.islmaiCollege.com",
      student: [
        {
          name: "Asad Nawaz",
          age: 23,
          email: "asadnawaz211@gamil.com",
        },
        {
          name: "Ali",
          age: 18,
          email: "ali211@gamil.com",
        },
        {
          name: "Umar",
          age: 19,
          email: "Umar211@gamil.com",
        },
      ],
    },
  ];
  return (
    <div>
      <h1>Nasted loop with component</h1>
      {collegeName.map((college, index) => {
       return <div key={index}>
          <h2>collegeName:{college.name}</h2>
          <ul>
            <li>
              <h3>city:{college.city}</h3>
            </li>
            <li>
              <h3>website:{college.website}</h3>
            </li>

            <li>
              <h2>student</h2>
              {college.student.map((student) => {
               return <ul>
                  <li>studentName:{student.name}</li>
                </ul>;
              })}
            </li>
          </ul>
        </div>;
      })}
    </div>
  );
};

export default Nasted;
