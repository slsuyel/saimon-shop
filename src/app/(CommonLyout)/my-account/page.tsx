import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-6">
      <h1 className="text-3xl sm:text-5xl text-white font-bold mb-4 sm:mb-8 animate-pulse text-center">
        Coming Soon
      </h1>
      <p className="text-white text-base sm:text-lg mb-4 sm:mb-8 text-center">
        We're working hard to bring you something amazing. Stay tuned!
      </p>
    </div>
  );
};

export default ComingSoon;
