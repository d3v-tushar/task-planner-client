import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const AddTask = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const entryDate = new Date().toLocaleString();
    const imageKey = import.meta.env.VITE_imgbb_key;
    const handleTaskSubmit = (data) =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                console.log(imgData.data.url);
                const task = {
                    title: data.title,
                    discription: data.discription,
                    image: imgData.data.url,
                    email: user.email,
                    date: entryDate
                };
                //Saving Data to DB
                fetch('https://task-planner-server.vercel.app/mytask', {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(task)
                })
                .then(res => res.json())
                .then(result =>{
                    console.log(result);
                    toast.success("Task Added!");
                })
            }
        })
    };
  return (
    <section className="bg-gray-100">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <h2 className="text-3xl my-4 font-bold text-center text-gray-900">Add Your Task Here</h2>
            <form onSubmit={handleSubmit(handleTaskSubmit)} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Task Title
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Task Title"
                  name="title"
                  type="text"
                  id="name"
                  {...register("title")}
                />
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Task Details
                </label>
                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Task Details"
                  name="discription"
                  rows="8"
                  id="message"
                  {...register("discription")}
                ></textarea>
              </div>

              <label htmlFor="files" className="block text-sm font-medium">Attachments</label>
            <div className="flex">
                <input 
                type="file" 
                name="image" 
                id="files" 
                {...register("image")}
                className="px-8 py-12 border-2 border-dashed rounded-md dark:border-gray-700 dark:text-gray-400 " />
            </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                >
                  <span className="font-medium"> Add Task </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-3 h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTask;
