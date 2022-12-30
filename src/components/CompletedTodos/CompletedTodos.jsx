import React from "react";
import { toast } from "react-hot-toast";

const CompletedTodos = ({todo, todos, setTodos}) => {
  const handleIncompleted = (todo) =>{
    fetch(`https://task-planner-server.vercel.app/mytask/${todo._id}`, {
          method: 'PATCH',
          headers: {
              'content-type' : 'application/json',
          },
          body: JSON.stringify({completed: false})
      })
      .then(res => res.json())
      .then(data =>{
          console.log(data);
          if(data.modifiedCount > 0){
              toast.success('Task in Queue')
              const remaining = todos.filter(td => td._id !== todo._id);
              const completed = todos.find(order => order._id === todo._id);
              completed.status = 'completed';
              
              const newTasks = [completed, ...remaining];
              setTodos(remaining);
          }
      })
  }
  return (
    <div>
      <article className="flex bg-gray-200 transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25 my-3">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time
            dateTime={todo.date ? todo.date : "2022-10-10"}
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
          >
            {/* <span>2022</span> */}
            <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
            <span>{todo.date}</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img alt="Guitar" src={todo.image} />
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <div className="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
            <a href="#">
              <h3 className="font-bold uppercase text-gray-900 dark:text-white">
                {todo.title}
              </h3>
            </a>

            <p className="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200">
              {todo.discription}
            </p>
          </div>

          <div className="sm:flex sm:items-end sm:justify-end">
            <button
              onClick={() => handleIncompleted(todo)}
              className="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
            >
              Mark Incomplete
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CompletedTodos;
