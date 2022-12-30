import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { MdOutlineDoneAll } from "react-icons/md";

const ActiveTask = ({ todo, todos, setTodos, user }) => {
  //const filterd = todos.filter(flter => flter.status !== true);
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleUpdate = (todo, e) => {
    e.preventDefault();
    const form = e.target;
    const discription = form.discription.value;
    //console.log(discription, todo._id);
    const updateTask = { discription: discription };
    fetch(`https://task-planner-server.vercel.app/mytask/${todo._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Task Updated");
          console.log(data);
          const filterd = todos.filter((flter) => flter._id !== todo._id);
          const remaining = todos.find((flter) => flter._id === todo._id);
          console.log(remaining);
          // remaining[discription] = discription;
          // const currentTask = {...remaining};
          // currentTask.discription = discription;
          // const newUpdate = [...currentTask, filterd];
          // setTodos(newUpdate);
          closeModal();
          //window.location.reload();
        }
      });
  };

  const handleComplete = (todo) => {
    fetch(`https://task-planner-server.vercel.app/mytask/${todo._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ completed: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Task Updated");
          const remaining = todos.filter((td) => td._id !== todo._id);
          const completed = todos.find((order) => order._id === todo._id);
          completed.status = "completed";
          const newTasks = [completed, ...remaining];
          setTodos(remaining);
        }
      });
  };

  const handleDelete = (todo) => {
    console.log(`Deleting Review With Id: ${todo._id}`);
    fetch(`https://task-planner-server.vercel.app/mytask/${todo._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Task Deleted!");
          const remainingTodos = todos.filter((tds) => tds._id !== todo._id);
          setTodos(remainingTodos);
        }
      });
  };

  return (
    <>
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

          <div className="grid items-end sm:justify-end text-2xl">
            <span class=" m-5 inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900">
              <button
                class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800"
                title="Edit Task"
                onClick={openModal}
              >
                <FiEdit/>
              </button>

              <button
                class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800"
                title="Delete Task"
                onClick={() => handleDelete(todo)}
              >
                <RiDeleteBin5Line/>
              </button>

              <button
                class="inline-block p-3 text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800"
                title="Mark As Complete"
                onClick={() => handleComplete(todo)}
              >
                <MdOutlineDoneAll/>
              </button>
            </span>

            {/* //Main Buttons */}
            {/* <button
              type="button"
              onClick={openModal}
              className="m-3 rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Update Task
            </button>
            <button
              onClick={() => handleDelete(todo)}
              className=" m-3rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Delete Task
            </button>
            <button
              onClick={() => handleComplete(todo)}
              className="m-3 rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Mark Complete
            </button> */}
          </div>
        </div>
      </article>

      {/* Modal */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {todo.title}
                  </Dialog.Title>
                  <form onSubmit={(e) => handleUpdate(todo, e)}>
                    <div className="mt-2">
                      <textarea
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Task Details"
                        name="discription"
                        rows="6"
                        id="message"
                      ></textarea>
                      <div className="mt-2 grid justify-center grid-cols-2">
                        <button
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          type="submit"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          onClick={closeModal}
                        >
                          Close!
                        </button>
                      </div>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ActiveTask;
