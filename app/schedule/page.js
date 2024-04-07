"use client";
import { useState } from "react";

export default function Schedule() {
  const [Schedule, setSchedule] = useState([
    {
      time: "9:00AM",
      location: "asd asd asd",
      locationTitle: "Ted's Coffee",
      message: "Pick a coffee on the way to job",
      title: "Ted's Coffee",
      completed: true,
    },
    {
      time: "10:00AM",
      location: "asd asd asd",
      locationTitle: "5ToGo",
      message: "More coffee won't hurt, ight",
      title: "Get more Coffee",
      completed: true,
    },
    {
      time: "11:00AM",
      location: "asd asd asd",
      locationTitle: "Tucano",
      message: "Just one more flat white",
      title: "Check the powerbalance",
      completed: false,
    },
  ]);
  return (
    <div className="flex h-screen w-screen flex-col items-center gap-2 p-4 px-4">
      <h1 className="text-3xl">AI Schedule Generator </h1>
      <div className="flex w-[95%] flex-col gap-2 font-mono">
        <textarea
          className="textarea w-full shadow-xl "
          placeholder="Tell me about your schedule ✨"
        ></textarea>
        <button
          onClick={async () => {
            await new Promise((r) => setTimeout(r, 3000));
            setSchedule([
              ...Schedule,

              {
                time: "3:00PM",
                location: "asd asd asd",
                locationTitle: "Mega Image",
                message: "Do groceries",
                title: "Do groceries",
                completed: false,
              },
              {
                time: "5:00PM",
                location: "asd asd asd",
                locationTitle: "World Class Gym",
                message: "Just Do It bro",
                title: "Go Gym",
                completed: false,
              },
            ]);
          }}
          className="btn btn-neutral btn-block bg-black"
        >
          Generate
        </button>
        <hr className="divider" />
        <h1 className="font-sans text-3xl">Current schedule</h1>
        <div className="flex w-full flex-col  gap-2">
          {Schedule.map((schedule) => {
            return (
              <div className="flex flex-row items-center" key={schedule.title}>
                <h1 className="text-lg">
                  {schedule.time}{" "}
                  <span className="font-bold">{schedule.title}</span>
                </h1>
                <div className="flex-1"></div>
                {schedule.completed ? (
                  <button
                    disabled
                    className="btn btn-neutral btn-sm border-gray-500 bg-gray-500"
                  >
                    {schedule.locationTitle}
                  </button>
                ) : (
                  <button className="btn btn-neutral btn-sm">
                    {schedule.locationTitle}
                  </button>
                )}
              </div>
            );
          })}
          <button className="btn btn-ghost border-2 border-dashed border-neutral">
            +
          </button>
        </div>
      </div>
    </div>
  );
}
