export default async function User() {
  const userData = await fetch(process.env.BE_URL + "/api/users/myInfo", {
    headers: {
      Authorization: "Bearer " + process.env.AUTH_TOKEN,
    },
    method: "GET",
  }).then((res) => res.json());

  return (
    <div className="h-screen w-screen">
      <div className="px-4 pt-2 ">
        <div className="flex flex-row gap-2">
          <div className="avatar">
            <div className="w-24 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <h1 className="text-3xl font-bold">
              {userData.username.split(" ")[0]}
            </h1>
            <h1 className="text-3xl font-bold">
              {userData.username.split(" ")[1]}
            </h1>
            <h3 className="text-lg font-bold">🔥 5 day</h3>
          </div>
        </div>
        <div className="divider w-full"></div>
        <button className="btn btn-ghost btn-block border-2 border-neutral shadow-md">
          Settings
        </button>
        <div className="grid h-[60%] w-full grid-cols-4 grid-rows-4 gap-2 pt-2">
          <div className="col-span-2 flex h-40 w-full flex-col rounded-lg border-2 border-neutral p-2 shadow-xl">
            <div className="text-5xl font-bold">{userData.km}km</div>
            <div className="flex-1"></div>
            <div className="text-lg">
              This week <br /> on the wheels.
            </div>
          </div>
          <div className="relative col-span-2 row-span-2 flex h-full w-full flex-col rounded-lg border-2 border-neutral p-2 shadow-xl">
            <div className="flex flex-col justify-center text-6xl font-bold ">
              {Math.floor(userData.minutesOnBike / 60)}h
              <br />{" "}
              <span className="text-4xl">
                {userData.minutesOnBike % 60}m
              </span>{" "}
              <span>
                <svg
                  className="absolute flex w-[90%] justify-center opacity-20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
              </span>
            </div>
            <div className="flex-1"></div>
            <div className="text-lg">
              Minutes, bikes <br />
              <b>You</b> moved.
            </div>
          </div>
          <div className="col-span-2 flex h-40 w-full flex-col rounded-lg border-2  border-neutral bg-black p-2 text-neutral-content shadow-xl">
            <div className="text-5xl font-bold">{userData.points}</div>
            <div className="flex-1"></div>
            <div className="text-lg">
              Points <br /> for your goodies.
            </div>
          </div>
          <div className="col-span-4 flex h-40 w-full flex-col items-center rounded-lg border-2  border-neutral bg-black p-2 text-neutral-content shadow-xl">
            <div className="text-6xl font-bold">Cismigiu</div>
            <div className="flex-1"></div>
            <div className="text-lg">
              Is your favorite zone. <br /> Or at least this is what we{" "}
              <i>legally</i> know.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
