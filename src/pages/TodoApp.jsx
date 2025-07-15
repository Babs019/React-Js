// import { useState } from "react";



// export default function TodoApp() {
//     const [task, setTask] = useState("");
//     const [todos, setTodos] = useState([]);

//     const addTodos = () => {
//         setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
//         setTask(""); // Spread Operator
//     };



//     // function logOutTask () {
//     //     console.log(task);
//     // }
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
//       <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

//         <div className="flex mb-4">
//           <input
//             value={task}
//             onChange={(e) => setTask(e.target.value)}
//             type="text"
//             className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
//             placeholder="Enter a task"
//           />
//           <button 
//             // onClick={logOutTask}
//             className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700">
//             Add
//           </button>
//         </div>

//         <ul>
//           <li className="flex justify-between items-center p-2 border-b">
//             <span className="cursor-pointer ">Do Laundry</span>
//             <button className="text-red-500 hover:text-red-700">&times;</button>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }


import React, { useState } from "react";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim()) {
      setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
      setTask("");
    }
  };
    console.log(todos);

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Todo App</h1>

        <div className="flex mb-4">
          <input
            type="text"
            className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button
            className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-2 border-b"
            >
              <span
                onClick={() => toggleComplete(todo.id)}
                className={`cursor-pointer ${
                  todo.completed ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                className="text-red-500 hover:text-red-700"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}