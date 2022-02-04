import React from "react";
import ProgressBar from "react-customizable-progressbar";

export default function Skills() {
  const progress = 77;

  return (
      <div className="flex flex-wrap justify-center">
        <div className="flex-col items-center px-3 py-3">
          <ProgressBar
            radius={70}
            progress={progress}
            strokeWidth={20}
            strokeColor="#3572A5"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >
            <div className="flex align-center justify-center absolute top-0 w-full h-full select-none items-center">
              <img
                src="https://www.python.org/static/community_logos/python-logo-generic.svg"
                width="100"
              />
            </div>
          </ProgressBar>
          <div className="flex justify-center text-3xl">{progress}%</div>
        </div>

        <div className="flex-col items-center px-3 py-3">
          <ProgressBar
            radius={70}
            progress={progress}
            strokeWidth={20}
            strokeColor="#4F5D95"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >
            <div className="flex align-center justify-center absolute top-0 w-full h-full select-none items-center">
              <img
                src="https://www.php.net/images/logos/new-php-logo.svg"
                width="70"
              />
            </div>
          </ProgressBar>
          <div className="flex justify-center text-3xl">{progress}%</div>
        </div>

        <div className="flex-col items-center px-3 py-3">
          <ProgressBar
            radius={70}
            progress={progress}
            strokeWidth={20}
            strokeColor="#701516"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >
            <div className="flex align-center justify-center absolute top-0 w-full h-full select-none items-center">
              <p>ruby icon</p>
            </div>
          </ProgressBar>
        </div>

        <div className="flex-col items-center px-3 py-3">
          <ProgressBar
            radius={70}
            progress={progress}
            strokeWidth={20}
            strokeColor="#f1e05a"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >
            <div className="flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none items-center">
              <img
                src="https://img.icons8.com/color/48/000000/javascript--v1.png"
                width="60"
              />
            </div>
          </ProgressBar>
          <div className="flex justify-center text-3xl">{progress}%</div>
        </div>

        <div className="flex-col items-center px-3 py-3">
          <ProgressBar
            radius={70}
            progress={progress}
            strokeWidth={20}
            strokeColor="#e44b23"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >
            <div className="flex align-center justify-center absolute top-0 w-full h-full select-none items-center">
              <img src="https://www.w3.org/html/logo/downloads/HTML5_Logo.svg" width="70"></img>
            </div>
          </ProgressBar>
          <div className="flex justify-center text-3xl">{progress}%</div>
        </div>

        <div className="flex-col items-center px-3 py-3">
          <ProgressBar
            radius={70}
            progress={progress}
            strokeWidth={20}
            strokeColor="#3555FF"
            strokeLinecap="round"
            trackStrokeWidth={20}
          >
            <div className="flex align-center justify-center absolute top-0 w-full h-full select-none items-center">
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" width="50" />
            </div>
          </ProgressBar>
          <div className="flex justify-center text-3xl">{progress}%</div>
        </div>
      </div>
  );
}
