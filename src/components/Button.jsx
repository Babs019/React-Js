import React from "react"

const Button = ({body}) => {
  return (
    <button className=" bg-yellow-300 w-[80%] px-7 py-4 rounded-2xl font-bold border-2 border-yellow-500 hover:bg-blue-500 hover:text-white hover:border-blue-600 ">
        {body}
    </button>
  );
};

export default Button;