import React from "react";
import Image from "next/image";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

export const Lan_skills = () => {
  return (
    <div className="flex flex-wrap justify-center max-w-5xl m-4">
      <div className="flex-col items-center px-7 py-3">
        {/* python */}
        <CircularProgressBar
          percent={74}
          size={170}
          colorSlice="#3572A5"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #3572A5",
          }}
        />
        <div className="flex justify-center mt-4">
          <Image
            src="/icons/python.png"
            alt="python"
            width={170}
            height={55}
          />
        </div>
      </div>

      {/* django */}
      <div className="flex-col items-center px-7 py-3">
        <CircularProgressBar
          percent={65}
          size={170}
          colorSlice="#144434"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #144434",
          }}
        />
        <div className="flex justify-center">
          <Image
            src="/icons/django.png"
            alt="django"
            width={80}
            height={80}
          />
        </div>
      </div>
        
      {/* php */}
      <div className="flex-col items-center px-7 py-3">
        <CircularProgressBar
          percent={54}
          size={170}
          colorSlice="#4F5D95"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #4F5D95",
          }}
        />
        <div className="flex justify-center mt-3">
          <Image
            src="/icons/php.png"
            alt="php"
            width={80}
            height={50}
          />
        </div>
      </div>

      {/* laravel */}
      <div className="flex-col items-center px-7 py-3">
        <CircularProgressBar
          percent={54}
          size={170}
          colorSlice="#f4543c"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #f4543c",
          }}
        />
        <div className="flex justify-center mt-2">
          <Image
            src="/icons/laravel_icon.png"
            alt="laravel"
            width={120}
            height={60}
          />
        </div>
      </div>

      {/* javascript */}
      <div className="flex-col items-center px-7 py-3">
        <CircularProgressBar
          percent={70}
          size={170}
          colorSlice="#f1e05a"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #f1e05a",
          }}
        />
        <div className="flex justify-center mt-2">
          <Image
            src="/icons/javascript.png"
            alt="javascript"
            width={60}
            height={60}
          />
        </div>
      </div>

      {/* React */}
      <div className="flex-col items-center px-7 py-3">
        <CircularProgressBar
          percent={68}
          size={170}
          colorSlice="#04dcfc"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #04dcfc",
          }}
        />
        <div className="flex justify-center mt-2">
          <Image
            src="/icons/reactjs_icon.png"
            alt="react"
            width={130}
            height={60}
          />
        </div>
      </div>

      {/* HTML5 */}
      <div className="flex-col items-center px-7 py-3">
        <CircularProgressBar
          percent={60}
          size={170}
          colorSlice="#e44b23"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #e44b23",
          }}
        />
        <div className="flex justify-center mt-2">
          <Image
            src="/icons/html.png"
            alt="html"
            width={60}
            height={60}
          />
        </div>
      </div>

      {/* css */}
      <div className="flex-col items-center px-7 py-3">
        <CircularProgressBar
          percent={58}
          size={170}
          colorSlice="#3555FF"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #3555FF",
          }}
        />
        <div className="flex justify-center mt-2">
          <Image
            src="/icons/css.png"
            alt="css"
            width={50}
            height={60}
          />
        </div>
      </div>
    </div>
  );
}
