import React from "react";
import Image from "next/image";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

export const Others_skills = () => {
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
          <Image
            src="/icons/amazon-web-services.png"
            alt="aws"
            width={50}
            height={50}
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
          <Image src="/icons/git_icon.png" alt="git" width={70} height={70} />
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
          <Image
            src="/icons/docker_icon.png"
            alt="docker"
            width={60}
            height={60}
          />
        </div>
      </div>
    </div>
  );
};
