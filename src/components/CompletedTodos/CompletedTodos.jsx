import React from "react";

const CompletedTodos = ({todo}) => {
  return (
    <div>
      <article class="flex bg-white transition hover:shadow-xl dark:bg-gray-800 dark:shadow-gray-800/25 my-3">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
          <time
            datetime="2022-10-10"
            class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900 dark:text-white"
          >
            <span>2022</span>
            <span class="w-px flex-1 bg-gray-900/10 dark:bg-white/10"></span>
            <span>Oct 10</span>
          </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
          <img alt="Guitar" src={todo.image} />
        </div>

        <div class="flex flex-1 flex-col justify-between">
          <div class="border-l border-gray-900/10 p-4 dark:border-white/10 sm:!border-l-transparent sm:p-6">
            <a href="#">
              <h3 class="font-bold uppercase text-gray-900 dark:text-white">
                {todo.title}
              </h3>
            </a>

            <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3 dark:text-gray-200">
              {todo.discription}
            </p>
          </div>

          <div class="sm:flex sm:items-end sm:justify-end">
            <a
              href="#"
              class="block bg-yellow-400 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-500"
            >
              Read Blog
            </a>
          </div>
        </div>
      </article>
    </div>
  );
};

export default CompletedTodos;
