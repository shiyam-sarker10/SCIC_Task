import { useState } from "react";

const FAQ = () => {
  // add your array of object data
  const array = [
    {
      question: "What is Taskiee?",
      answer:
        "Taskiee is a comprehensive time management and task tracking platform designed to help individuals and teams organize, prioritize, and efficiently manage their daily tasks and projects.",
    },
    {
      question: "How does Taskiee enhance productivity?",
      answer:
        "Taskiee enhances productivity through features like intuitive task organization, deadline tracking, collaboration tools, and analytics. Users can create visual timelines, set reminders, and gain insights into their work patterns to optimize productivity.",
    },
    {
      question: "Is Taskiee suitable for both personal and professional use?",
      answer:
        "Yes, Taskiee is versatile and caters to both personal and professional needs. Whether you're a student managing coursework, a freelancer handling projects, or a business professional coordinating team tasks, Taskiee offers features adaptable to various contexts.",
    },
    {
      question: "Can Taskiee be accessed on multiple devices?",
      answer:
        "Absolutely. Taskiee offers cross-platform accessibility, allowing users to access their tasks and projects seamlessly across desktop, tablet, and mobile devices. This ensures flexibility and productivity, even on the go.",
    },
    {
      question: "How secure is Taskiee for storing sensitive information?",
      answer:
        "Taskiee prioritizes user data security. It employs encryption protocols and follows industry best practices to safeguard sensitive information. Additionally, Taskiee allows users to manage privacy settings, controlling who can access specific tasks or projects.",
    },
  ];

  // toggle state and function
  const [isOpen, setIsOpen] = useState(0);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div className="flex justify-center">
      <div className=" max-w-[650px] rounded-lg py-10 space-y-6 cursor-pointer">
        {/* maping each accordion  */}
        {array.map((arr, idx) => (
          <div
            key={idx}
            onClick={() => handleToggle(idx)}
            className="flex items-center"
          >
            {/* the index div  */}
            <div className="w-16 h-16 bg-black flex justify-center items-center text-white text-2xl font-semibold rounded-xl font-sans">
              <span>0{idx + 1}</span>
            </div>
            <div className="w-10 h-[2px] bg-black relative">
              <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-black"></span>
              <span className="bg-black w-10 h-1"></span>
            </div>
            {/* main accordion div  */}
            <div>
              <div className="max-w-[600px] bg-gray-50 shadow-md border-t-[12px] p-4 border-black relative">
                <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-black absolute top-0 right-0"></span>
                <h1 className="text-black text-lg text-center px-8">
                  {arr?.question}
                </h1>
              </div>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600  ${
                  isOpen === idx
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className=" max-w-[600px] rounded-br-xl rounded-bl-xl bg-black text-white p-6 text-center text-sm">
                   {arr?.answer}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
