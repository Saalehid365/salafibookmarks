import React from "react";

const LessonsCard = () => {
  return (
    <div>
      <div class="min-h-96 flex justify-center items-center py-10">
        <div class="max-w-sm bg-gray-500 px-2 pt-2 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 flex flex-col items-center">
          <div class="relative">
            <img
              class="w-40 rounded-xl"
              src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Colors"
            />
            <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
              FREE
            </p>
          </div>
          <h1 class="mt-4 text-gray-800 text-lg font-bold cursor-pointer w-60">
            Sharh us Sunnah
          </h1>
          <div class="my-4">
            <div class="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-indigo-600 mb-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
              <p className="text-xs">1:34:23 Minutes</p>
            </div>
            <div class="flex space-x-1 items-center">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 text-indigo-600 mb-1.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <p className="text-xs">Abu Khadijah</p>
            </div>

            <button class="mt-4 text-sm w-32 text-white bg-indigo-600 py-2 rounded-xl shadow-lg">
              Listen Live
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonsCard;
