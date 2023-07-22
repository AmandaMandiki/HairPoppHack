import React from "react";

export default function HelloPage() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen text-3xl">
      <div className="my-9 border-4 border-purple-500 rounded-lg p-4">
        <em className="text-5xl">Hello there!</em>
      </div>
      <h1 className="mt-4">
        Welcome to the Hair Popp Quiz
      </h1>
      <h1 className="text-lg mt-2 leading-tight">
        A quiz formulated to help you discover your dream hair care products
      </h1>
      <div className="mt-9 bg-purple-500 text-white px-8 py-4 rounded-lg cursor-pointer text-base my-4">
        Click here to continue
      </div>
  </div>
  );
}

