import React, { useEffect, useState } from "react";

const UseCustom = (url) => {
  const [data, setdata] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("url")
      .then((Response) => Response.json())
      .then((data) => setdata(data))
      .catch((error) => setError(error));
  }, [url]);
  return { data, error };
};

export default UseCustom;
