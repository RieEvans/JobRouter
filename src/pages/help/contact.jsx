import React from "react";

export const Contact = () => {
  return (
    <div className="">
      <h3 className="text-white font-bold text-2xl">Contact Us</h3>
      <form className="flex flex-col gap-5 w-[30%]">
        <span className="text-white">Your email:</span>
        <input type="email" name="email" required className="rounded-md bg-gray-800 text-white" />

        <span className="text-zinc-200 ">Your message:</span>
        <textarea className="bg-gray-700 rounded-md" name="message" required></textarea>

        <button className="bg-red-600 px-2 py-1 rounded text-zinc-200 font-semibold">Submit</button>
      </form>
    </div>
  );
};
