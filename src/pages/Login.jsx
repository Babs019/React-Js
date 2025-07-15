// import axios from "axios";
// import React, { useState } from "react";

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const credentials ={username, password}

//     try{
//       const response = await axios.post(
//         "https://fakestoreapi.com/auth/login",
//         credentials
//       );
//       console.log(response)
//     }catch (error) {
//     console.log("Error", error);
//   }
// };
//   return (


//       <div className="m-9">
      
//        <h2 className="text-3xl text-gray-800 font-bold mb-6 m-8 ">Login</h2>
//         <h1 className="m-8 font-small text-gray-600">Authenticate a user.</h1>
//         <div className="m-8">
//             <input
//                 className="mt-5 w-[50%] h-[35%] pl-2 border text-black border-gray-200 rounded p-2 shadow focus:outline-none "
//                 type="username"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 placeholder="username"
//                 required
//             />
//         </div>
//         <div className="m-8">
//             <input 
//                 className=" w-[50%] h-[35%] pl-2 border text-black border-gray-200 rounded p-2 shadow focus:outline-none " 
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="password"
//                 required
//             />
//         </div>
//     </div>
 
//   )
// };

// export default Login;

import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = { username, password };
    try {
      setLoading(true);
      const response = await axios.post(
        "https://fakestoreapi.com/auth/login",
        credentials
      );

      if (response.status == 200) {
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      setError(true);
      setLoading(false);
      setErrorMessage(error.response.data);
      // console.log("Error", error);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter username"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter password"
            required
          />

          {error && <span className="mt-3 text-red-500">{errorMessage}</span>}
        </div>

        <button
          type="submit"
          className="w-full flex justify-center bg-blue-600 text-center text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {loading ? (
            <svg width="25px" height="25px" viewBox="0 0 50 50">
              <circle
                cx="25"
                cy="25"
                r="20"
                stroke="#ffff"
                stroke-width="4"
                fill="none"
                stroke-linecap="round"
                stroke-dasharray="100"
                stroke-dashoffset="60"
                floodColor="white"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 25 25"
                  to="360 25 25"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;

// mor_2314
// 83r5^_