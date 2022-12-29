import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import ActiveTask from "../ActiveTask/ActiveTask";

const MyTask = () => {
  const { loading } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://task-planner-server.vercel.app/mytask")
      .then((res) => res.json())
      .then((data) => setTodos(data));
      setIsLoading(false);
  }, []);
  if(isLoading){
    return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
  };
  return (
    <div className="w-4/5 mx-auto my-7">
      {todos.map((todo, index) => (
        <ActiveTask 
        key={index} 
        todo={todo}
        setTodos={setTodos}
        ></ActiveTask>
      ))}
    </div>
  );
};

export default MyTask;
