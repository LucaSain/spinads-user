"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import Link from "next/link";
import { uploadPicture } from "../actions";
export default function CameraButton() {
  const [scanning, setScanning] = useState(0);

  const [data, setData] = useState("No result");
  const pathname = usePathname();

  useEffect(() => {
    if (scanning == 1 && data != "No result") {
      setScanning(2);
    }
  }, [data]);
  if (pathname == "/") {
    return (
      <>
        <motion.div
          initial={true}
          animate={{
            height:
              scanning == 0
                ? "7rem"
                : scanning == 1
                  ? "50vh"
                  : scanning == 2
                    ? "50vh"
                    : "90vh",
            width:
              scanning == 0
                ? "90%"
                : scanning == 1
                  ? "98vw"
                  : scanning == 2
                    ? "100vw"
                    : "100vw",
            backgroundColor: scanning == 2 || scanning == 3 ? "black" : "white",
            bottom: scanning == 2 || scanning == 3 ? "0px" : "",
            border: scanning == 3 ? "0px" : "",
          }}
          transition={{ duration: 0.4 }}
          style={{
            overflow: "hidden",
            borderRadius: scanning ? "23px" : "23px",
          }}
          className={
            (scanning ? "flex items-center justify-center" : "btn") +
            " absolute bottom-0 h-28 w-[90%]  border-2 border-neutral bg-white shadow-xl"
          }
        >
          {!scanning ? (
            <svg
              onClick={() => {
                setScanning(1);
              }}
              className="w-3/4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z" />
            </svg>
          ) : scanning == 1 ? (
            <div className="w-[90%] rounded-lg">
              <Scanner
                components={{ audio: false, tracker: true }}
                onResult={(result, text) => {
                  setData(text);
                  console.log(result, text);
                }}
                onError={(error) => {
                  console.log(error);
                }}
                enabled={scanning == 1}
                constraints={{ facingMode: { exact: "environment" } }}
              />
            </div>
          ) : scanning == 2 ? (
            <div className="h-full w-full p-4 text-white">
              <div className="text-5xl font-bold">Ride started</div>
              <div className="text-lg">Drive safely</div>
              <br />
              <div className="font-mono text-3xl font-bold">Time in: 12min</div>
              <div className="font-mono text-3xl font-bold">
                Points obtained: 300
              </div>
              <br />
              <div
                onClick={() => {
                  setScanning(3);
                  setData("No result");
                }}
                className="btn btn-success btn-block "
              >
                End ride
              </div>
            </div>
          ) : (
            <div className="flex h-full w-full flex-col gap-2 p-4 text-white">
              <div className="text-5xl font-bold">Course finished</div>

              <br />
              <div className="font-mono text-3xl font-bold">Time: 12min</div>
              <div className="font-mono text-3xl font-bold">
                Distance: 300 km
              </div>
              <div className="font-mono text-3xl font-bold">Points: 300</div>
              <div className="font-mono text-3xl font-bold">Streak: 5🔥</div>
              <div className="font-mono text-3xl font-bold">Quests:</div>

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
                  <div className="font-mono text-xl">
                    One-way speed of light
                  </div>
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
              <div className="flex-1"></div>
              <form
                action={uploadPicture}
                className="flex w-full flex-col gap-2"
              >
                <label htmlFor="picture" className="btn btn-success btn-block">
                  Take a picture
                </label>
                <input
                  type="file"
                  id="picture"
                  name="picture"
                  accept="image/*"
                  capture="environment"
                  onChange={() => {
                    console.log("decl");
                  }}
                  className="hidden"
                  placeholder="take a picture"
                />

                <button type="submit" className="btn btn-block mb-2 ">
                  Finish
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </>
    );
  }
  return (
    <Link href="/">
      <motion.div className="btn btn-block border-2 border-neutral bg-white shadow-xl">
        <svg
          className="w-1/3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </svg>
      </motion.div>
    </Link>
  );
}
