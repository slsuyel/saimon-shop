import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
      <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin mb-6"></div>

      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white text-center">
        Loading your shopping experience...
      </h1>

      <p className="mt-2 text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base">
        Please wait while we fetch the latest products.
      </p>
    </div>
  );
};

export default Loading;
