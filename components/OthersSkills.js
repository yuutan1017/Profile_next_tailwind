import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

export default function Others_skills() {
  return (
    <div className="flex flex-wrap justify-center max-w-5xl m-4">
      <div className="flex-col items-center px-7 py-4">
        <CircularProgressBar
          percent={52}
          size={170}
          colorSlice="#FF9800"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #FF9800",
          }}
        />
        <div className="flex justify-center mt-4">
          <img src="https://img.icons8.com/color/48/000000/amazon-web-services.png"
          />
        </div>
      </div>

      <div className="flex-col items-center px-7 py-4">
        <CircularProgressBar
          percent={65}
          size={170}
          colorSlice="#F34F29"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #F34F29",
          }}
        />
        <div className="flex justify-center mt-2">
          <img
            src="/git_icon.png"
            width="70"
          />
        </div>
      </div>

      <div className="flex-col items-center px-7 py-4">
        <CircularProgressBar
          percent={50}
          size={170}
          colorSlice="#28B8EB"
          colorCircle="#eeeeee"
          fontColor="#8c8c8c"
          fontSize="1rem"
          fontWeight={500}
          rotation={144}
          cut={30}
          round
          styles={{
            borderRadius: "50%",
            boxShadow: "inset 0 0 25px 10px #28B8EB",
          }}
        />
        <div className="flex justify-center mt-2">
          <img
            src="/docker_icon.png"
            width="60"
          />
        </div>
      </div>
    </div>
  );
}
