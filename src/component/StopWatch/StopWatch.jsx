import React, { useState, useEffect } from "react";

const StopWatch = () => {
  const [mill, setMill] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  const [running, setRunning] = useState(false);

  

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => {
        setMill((prev) => (prev < 99 ? Number(prev) + 1 : "00"));

        if (mill >= 99) {
          setSec((prev) => prev + 1);
          
        }

        if (sec >= 60) {
          setMin((prev) => prev + 1);
          setSec(0);
        }
        if (min >= 60) {
          setHour((prev) => prev + 1);
          setMin(0);
        }
      }, 10);
    }

    return () => clearInterval(interval);
  }, [running, mill, sec,hour]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setRunning(false);
    setMill(0);
    setSec(0);
    setMin(0);
  };

  return (
    <div className="p-10">
      <div className="flex justify-center gap-4">
        <div className="text-center w-10 h-10">
          <p className="text-3xl">{hour < 10 ? `0${hour}` : hour}</p>
        </div>
        <span className="text-3xl">:</span>
        <div className="text-center  w-10 h-10">
          <p className="text-3xl">{min < 10 ? `0${min}` : min}</p>
        </div>
        <span className="text-3xl">:</span>
        <div className="text-center  w-10 h-10">
          <p className="text-3xl">{sec < 10 ? `0${sec}` : sec}</p>
        </div>
        <span className="text-3xl">:</span>
        <div className="text-center  w-10 h-10">
          <p className="text-3xl">{mill < 10 ? `0${mill}` : mill}</p>
        </div>
      </div>
      <div className="flex gap-6 justify-center my-6">
        {running ? (
          <button
            onClick={handleStop}
            className="bg-black p-4 rounded-full transition-all duration-300"
          >
            <svg
              width={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M8.5 7V18"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>{" "}
                <path
                  d="M15.5 7V12.5V18"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                ></path>{" "}
              </g>
            </svg>
          </button>
        ) : (
          <button
            onClick={handleStart}
            className="bg-black p-4 rounded-full transition-all text-white font-medium duration-300"
          >
            <svg
              width={20}
              fill="white"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#faf4f4"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>play</title>{" "}
                <path d="M5.92 24.096q0 1.088 0.928 1.728 0.512 0.288 1.088 0.288 0.448 0 0.896-0.224l16.16-8.064q0.48-0.256 0.8-0.736t0.288-1.088-0.288-1.056-0.8-0.736l-16.16-8.064q-0.448-0.224-0.896-0.224-0.544 0-1.088 0.288-0.928 0.608-0.928 1.728v16.16z"></path>{" "}
              </g>
            </svg>
          </button>
        )}

        <button
          onClick={handleReset}
          className="border border-black px-10 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default StopWatch;
