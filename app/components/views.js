"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export function QuestView({ quests }) {
  console.log(quests);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      onClick={() => setIsOpen(!isOpen)}
      initial={false}
      animate={{ height: isOpen ? "18rem" : "8rem" }}
      transition={{ duration: 0.5 }}
      style={{ overflow: "hidden" }}
      className="relative h-32 rounded-lg bg-black p-2 text-neutral-content shadow-xl"
    >
      <h1
        className={
          !isOpen
            ? "absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-gradient-to-t from-black via-transparent p-2 text-4xl font-bold backdrop-blur-sm "
            : "absolute left-0 top-0 z-10 h-full w-full rounded-lg  p-2 text-4xl font-bold "
        }
      >
        {isOpen ? "Quests" : "Quests available"}
      </h1>
      <div className="left-0 z-0 flex w-full flex-col items-center justify-center gap-2">
        <br />
        <br />
        {quests.map((quest) => {
          return (
            <div
              key={quest.name}
              className="h-max w-full rounded-lg border-[1px] border-white p-2"
            >
              <div className="flex h-full w-full flex-row items-center gap-2">
                <div className="font-mono text-xl">{quest.name}</div>
                <div className="flex-1"></div>
                <div
                  className="radial-progress"
                  style={{ "--value": 50, "--size": "3rem" }}
                  role="progressbar"
                >
                  50%
                </div>
              </div>
            </div>
          );
        })}
        {quests.map((quest) => {
          return (
            <div
              key={quest.name}
              className="h-max w-full rounded-lg border-[1px] border-white p-2"
            >
              <div className="flex h-full w-full flex-row items-center gap-2">
                <div className="font-mono text-xl">{quest.name}</div>
                <div className="flex-1"></div>
                <div
                  className="radial-progress"
                  style={{ "--value": 50, "--size": "3rem" }}
                  role="progressbar"
                >
                  50%
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export function SmallMapView() {
  const [isOpen2, setIsOpen2] = useState(false);
  return (
    <motion.div
      onClick={() => setIsOpen2(!isOpen2)}
      initial={false}
      animate={{ height: isOpen2 ? "20rem" : "8rem" }}
      transition={{ duration: 0.5 }}
      style={{ overflow: "hidden" }}
      className="relative h-32 rounded-lg border-2 border-neutral bg-white p-2 shadow-xl"
    >
      <h1
        className={
          !isOpen2
            ? "absolute left-0 top-0 z-10 h-full w-full rounded-lg bg-gradient-to-t from-base-300 via-transparent p-2 text-4xl font-bold backdrop-blur-sm "
            : "absolute left-0 top-0 z-10 h-full w-full rounded-lg  p-2 text-4xl font-bold "
        }
      >
        Heat-zones
      </h1>
      <div className="left-0 z-0 flex h-full w-full flex-col items-center justify-center">
        <div className="h-full w-full rounded-lg border-[1px] border-white p-2">
          <div className="h-full w-full rounded-lg">
            {/* <MapView></MapView> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
