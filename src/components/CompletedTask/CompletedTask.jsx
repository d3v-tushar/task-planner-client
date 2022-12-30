import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import CompletedTodos from '../CompletedTodos/CompletedTodos';
import Loading from "../Loading/Loading";

const CompletedTask = () => {
    const [todos, setTodos] = useState([]);
    const {user, loading} = useContext(AuthContext);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() =>{
        fetch(`https://task-planner-server.vercel.app/mytask/status?email=${user.email}&completed=${true}`)
        .then(res => res.json())
        .then(data => setTodos(data))
        setIsLoading(false);
    }, []);

    if(isLoading && !loading){
        return <Loading></Loading>
      };

    return (
        <div className='w-4/5 mx-auto my-7 min-h-screen'>
            {
                todos.map((todo, index) => <CompletedTodos key={index} todo={todo} todos={todos} setTodos={setTodos}></CompletedTodos>)
            }
        </div>
    );
};

export default CompletedTask;