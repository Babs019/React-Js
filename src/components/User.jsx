import React from "react";
import { FaUserAlt } from "react-icons/fa";
import profileImage from "../assets/react.svg";

const user = [
    {
        name:"Babs",
        age: 12,
        class: "Full-Stack",
        image: "vite.svg",
    },
    {
        name:"John",
        age: 42,
        class: "Cyber-security",
        image: profileImage ,
    }, 
    {
        name:"Bali",
        age: 62,
        class: "Digital-marketer",
        image: "vite.svg",
    },
   {
        name:"Esther",
        age: 32,
        class: "Data-Analyst",
        image: "vite.svg",
    },
];

const User = () => {
  
   const number = [2,4,6];
   const doubledNumber = number.map((num) => num * 2);
   console.log(doubledNumber);

   const fruits = ["orange,mango,banana"];
  return (
    // <div className="">
    //     {fruits.map((f, index) => (
    //        <ul key={index}>
    //         <li>{f}</li>
    //     </ul> 
    //     ))}
    // </div>

    <div className="p-[100px] ">

       {user.map((u, index) => (

        <article 
            key={index} 
            className="border-2 border-gray-100 w-fit p-3 rounded-lg shadow-md">

            <img src={u.image} alt="profile-image"/>
            <p className="font-semibold">name:{u.name}</p>
            <p className="font-semibold">age:{u.age}</p>
            <p className="font-semibold">class:{u.class}</p>
            <FaUserAlt />
        </article>
       ))}
    </div>
  );
};

export default User;