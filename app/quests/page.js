"use client";
import MapView from "../components/map";
import { motion } from "framer-motion";
import { useState } from "react";
import Card from "../components/card";

export default function Quests() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const shop = [
    {
      title: "KFC Coupon",
      description: "Any bucket 20% off",
      price: "300",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYfj09vfWTGPoHmHwxj-nloAjfOibY3MgorHeE78ikpQ&s",
    },
    {
      title: "Electronics Medal",
      description: "All the day, all the night",
      price: "5000",
      imageURL:
        "https://www.zuken.com/us/wp-content/uploads/sites/12/2018/11/chip-on-board-ar-2018-1510x731.jpg",
    },
  ];
  const numPoints = 123;
  return (
    <div className="min-h-screen w-screen pb-20">
      <div className="flex flex-col gap-2 p-4">
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
            <div className="h-max w-full rounded-lg border-[1px] border-white p-2">
              <div className="flex h-full w-full flex-row items-center gap-2">
                <div className="font-mono text-xl">Ride 1km in Regie</div>
                <div className="flex-1"></div>
                <div
                  className="radial-progress"
                  style={{ "--value": 70, "--size": "3rem" }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>
            <div className="h-max w-full rounded-lg border-[1px] border-white p-2">
              <div className="flex h-full w-full flex-row items-center gap-2">
                <div className="font-mono text-xl">Ride 1km in Regie</div>
                <div className="flex-1"></div>
                <div
                  className="radial-progress"
                  style={{ "--value": 70, "--size": "3rem" }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>
            <div className="h-max w-full rounded-lg border-[1px] border-white p-2">
              <div className="flex h-full w-full flex-row items-center gap-2">
                <div className="font-mono text-xl">Ride 1km in Regie</div>
                <div className="flex-1"></div>
                <div
                  className="radial-progress"
                  style={{ "--value": 70, "--size": "3rem" }}
                  role="progressbar"
                >
                  70%
                </div>
              </div>
            </div>
          </div>
        </motion.div>
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
                <MapView></MapView>
              </div>
            </div>
          </div>
        </motion.div>

        <br />
        <div className="text-3xl font-bold">
          Shop{" "}
          <span className="text-lg font-normal">
            {numPoints} points available
          </span>
        </div>
        <div className="grid w-full grid-cols-2 gap-2">
          {shop.map((shopitem) => {
            return <Card key={shopitem.title} shopitem={shopitem} />;
          })}
        </div>
      </div>
    </div>
  );
}
