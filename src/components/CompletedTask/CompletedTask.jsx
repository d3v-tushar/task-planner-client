import React, { useEffect, useState } from 'react';
import CompletedTodos from '../CompletedTodos/CompletedTodos';

const CompletedTask = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() =>{
        fetch('https://task-planner-server.vercel.app/mytask')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, []);
    console.log(todos);
    return (
        <div className='w-4/5 mx-auto my-7'>
            {
                todos.map((todo, index) => <CompletedTodos key={index} todo={todo}></CompletedTodos>)
            }
        </div>
    );
};

export default CompletedTask;