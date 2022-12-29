import React, { useState, Fragment } from "react";
import { Dialog, Transition } from '@headlessui/react'

const ActiveTask = ({todo, setTodos}) => {
    const [isOpen, setIsOpen] = useState(false)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

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
            const remainingTodo = todo.filter((tds) => tds._id !== todo._id);
            setTodos(remainingTodo);
           }
        });
    };

  return (
    <>
      <article className="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25 my-3">
        <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            dateTime={todo.date ? todo.date : "2022-10-10"}
            className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
          >
            <span>2022</span>
            <span className="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div className="hidden sm:block sm:basis-56">
          <img
            alt="Guitar"
            src={todo.image}
          />
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
          type="button"
          onClick={openModal}
          className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          Update Task
        </button>
        <button
        onClick={() =>handleDelete(todo)}
              className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            >
              Delete Task
            </button>
          </div>
        </div>
      </article>


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
                  <div className="mt-2">
                  <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Task Details"
                  name="discription"
                  rows="8"
                  id="message"
                ></textarea>
                  </div>
                  <form></form>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close!
                    </button>
                  </div>
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
