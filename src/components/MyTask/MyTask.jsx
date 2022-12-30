import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ActiveTask from "../ActiveTask/ActiveTask";
import Loading from "../Loading/Loading";

const MyTask = () => {
  const { loading, user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const pendingTodo = todos.filter(todo => todo.completed !== true);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://task-planner-server.vercel.app/mytask?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTodos(data));
      setIsLoading(false);
  }, []);

  if(isLoading && !loading){
    return <Loading></Loading>
  };
  return (
    <div className="w-4/5 mx-auto my-7 min-h-screen">
      {pendingTodo.map((todo, index) => (
        <ActiveTask 
        key={index}
        user={user}
        todo={todo}
        todos={todos}
        setTodos={setTodos}
        ></ActiveTask>
      ))}
      {
        todos.email && todos.length === 0 && <h2 className="text-3xl text-center text-gray-600 my-7 font-bold">No Task Found</h2>
      }
    </div>
  );
};

export default MyTask;
