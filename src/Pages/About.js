import React from "react";
import blanco from "../blanco-code.jpeg";
import poki from "../poki-nom.jpeg";

export default function About() {
  return (
    <div className="flex justify-evenly bg-sky-100 h-screen">
      <div className="pt-40 ">
        <img
          className="p-2 bg-white border rounded max-w-sm"
          src={poki}
          alt="lil-baby"
        />
      </div>
      <div className="p-14 border-x-black w-6/12">
        <h1 className="font-medium leading-tight text-4xl mt-0 mb-2 text-blue-400 p-10">
          About
        </h1>
        <p className="text-lg font-medium mb-5">What inspired the project?</p>
        <p>
          Going to pet stores and seeing all the options of products can be
          overwhelming. What is actually worth the investment? I would want to
          give my dogs the very best. It would be helpful to have suggestions
          rather than search thru a whole website's catalog of options. Thus
          Doggo Central was born!
        </p>
      </div>
      <div className="pt-10">
        <img
          className="p-2 bg-white border rounded max-w-sm"
          src={blanco}
          alt="the boss himself"
        />
      </div>
    </div>
  );
}
