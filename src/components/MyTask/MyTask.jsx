import React, { useEffect, useState } from 'react';
import ActiveTask from '../ActiveTask/ActiveTask';
import MyModal from '../MyModal/MyModal';

const MyTask = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() =>{
        fetch('http://localhost:4000/mytask')
        .then(res => res.json())
        .then(data => setTodos(data))
    }, []);
    console.log(todos);
    return (
        <div className='w-4/5 mx-auto my-7'>
            {
                todos.map((todo, index) => <ActiveTask key={index} todo={todo}></ActiveTask>)
            }
        </div>
    );
};

export default MyTask;