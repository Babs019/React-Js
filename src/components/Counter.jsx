import React, { useState } from "react";




const Counter = () => {
    //Usetate for handling input 
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");



    


    // const count = 3;
    // const [username, setUsername] = useState("Babs Doe")
    
    // const [count, setCount] = useState(10);

    // const updateCount = () => {
    //     setCount(50);
    // }
 
    // const [user, setUser] = useState("Stranger");

    // const updateUser = () => {
    //     setUser("Babs")
    // };
        
    
    // const [count, setCount] = useState(0); //count is real variable with the value of 10 
    //setCount is only for updating the value of count 
    
    // function increase() {
    //    setCount( count +1);
    // }

    // function decrease() {
    //     setCount( count -1);
    // }

    // const reset = () => {
    //     setCount(0);
    // }


    const [like, setLike] = useState(0);
    const [dislike, setdisLike] = useState(0);
    const handleLike = () => {
        setLike(like + 1)
    }

    
    const handleDisLike = () => {
        setdisLike(dislike + 1)
    }

    const logName = () => {
        console.log(name)
    }

    const logoutResult = () => {
        console.log(email + " " + username + " " + password )
    }

    const name1 = "Babs"
    const age = 12
  return (
   <div className="p-[100px]">
    {/* <h1 className="text-3xl font-bold">Hello {user}!</h1> */}
    {/* <p className="font-bold text-2xl">{count}</p>
    <button onClick={updateCount}>Update count</button> */}
    {/* { <p className="font-bold text-2xl">{username}</p> } */}
    {/* <div className="flex gap-3 items-center">
        <button onClick={decrease} className="border-2 border-black px-2 mt-4">
        Remove
    </button>
    <h1 className="text-3xl font-bold ">{count}</h1>
    <button onClick={increase} className="border-2 border-black px-2 mt-4">
        Add
    </button>
    <button onClick={reset} className="border-2 border-black px-2 mt-4">
        Reset
    </button>
    </div> */}

    <div className="space-x-4">
        <button onClick={handleLike}> Like:</button>
        <span className="font-semibold">{like}</span>
    </div>

    <div className="flex gap-4">
        <button onClick={handleDisLike}>Dislike:</button>
        <span className="font-semibold">{dislike}</span>
    </div>
    
    <div className="w-[400px] h-[40px] border-2 border-gray-100 mt-4">
        <input 
          className="w-full h-full pl-2" 
          placeholder="Enter your name "
          value={name}
          onChange={(e) => setName (e.target.value)}
        />
        
        <button onClick={logName}>Log out name</button>
    </div>
    
    <p className="mt-6">my name is {name1} and im {age} years old </p>

    <div className="mt-6 w-[400px] h-[40px] border-2  border-gray-100">
        <input 
          type="email"
          className="w-full h-full pl-2 outline-none" 
          placeholder="Enter your email "
          value={email}
          onChange={(e) => setEmail (e.target.value)}
        />
    </div>
   
   <p className="font-bold mt-2 ">{email}</p>

   <div className="mt-2 w-[400px] h-[40px] border-2  border-gray-100 ">
        <input 
          type="username"
          className="w-full h-full pl-2 outline-none" 
          placeholder="Enter your username "
          value={username}
          onChange={(e) => setUsername (e.target.value)}
        />
    </div>

   <div className="mt-2 w-[400px] h-[40px] border-2  border-gray-100 ">
        <input 
          type="password"
          className="w-full h-full pl-2 outline-none" 
          placeholder="Enter your password "
          value={password}
          onChange={(e) => setPassword (e.target.value)}
        />
    </div>
    <button className="mt-2 border-2 text-lg bg-blue-300 hover:bg-blue-500" onClick={logoutResult}>Submit </button>

    
  </div>
  );
};

export default Counter;