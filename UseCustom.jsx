// import React, { useEffect, useState } from 'react'

// // CustomHook: it's function which use react hook to encapsulate the custom logic.

// function UseCustom(url:string) {
//   const [data, setdata] = useState(null);
//   const [error, seterror] = useState(null);
//   const [loading, setloading] = useState(true);

//   useEffect(()=>{
//     const fetchData = async() =>{
//      const response = await fetch('url');
//      const data = await response.json();
//      setdata(data);
//     } catch (error){
//       seterror(error);
//     } finally {
//       setloading(false)
//     };
//     fetchData();
//   },[url]);
//   return (
//     <div>
//       {data,error,loading}
//     </div>
//   )
// };

// const DataComponent = () => {
//   const [data, error, loading] = useCustom("httpa://api.com/data");

//   if(loading){
//     return <div>loading.....</div>
//   }
//   if(error) {
//     return <div>Error: {error.message}</div>
//   }
//   return <div>Data: {data}</div>;
// };

// export default UseCustom;
