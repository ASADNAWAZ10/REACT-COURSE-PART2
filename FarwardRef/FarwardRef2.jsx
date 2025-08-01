// import { forwardRef } from "react"; 
import React from "react"; 

//It's for 18 version
// const FarwardRef2 = (props, ref) => {
//   return (
//     <div>
//       <input type="text" ref={ref} />
//     </div>
//   );
// };

// export default forwardRef(FarwardRef2); // for 18 version

//Now we use 19 version like:
const FarwardRef2 = (props) => {
  return (
    <div>
      <input type="text" ref={props.ref} />
    </div>
  );
};
export default FarwardRef2; // for 19 version
