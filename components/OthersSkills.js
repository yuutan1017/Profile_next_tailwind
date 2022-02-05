import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";

export default function Others_skills() {
  return (
    <div className="flex flex-wrap justify-center max-w-5xl m-4">
      <div className="flex-col items-center px-3 py-3">
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
          <img
            src="https://www.python.org/static/community_logos/python-logo-generic.svg"
            width="130"
          />
        </div>
      </div>

      <div className="flex-col items-center px-3 py-3">
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
          <img
            src="https://www.php.net/images/logos/new-php-logo.svg"
            width="80"
          />
        </div>
      </div>

      <div className="flex-col items-center px-3 py-3">
        <CircularProgressBar
          percent={71}
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
          <img
            src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            width="60"
          />
        </div>
      </div>

      <div className="flex-col items-center px-3 py-3">
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
          <img
            src="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg"
            width="60"
          />
        </div>
      </div>

      <div className="flex-col items-center px-3 py-3">
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
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            width="40"
          />
        </div>
      </div>
    </div>
  );
}
