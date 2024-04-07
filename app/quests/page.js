import Shop from "../components/Shop";
import Card from "../components/card";
import { QuestView, SmallMapView } from "../components/views";
export default async function Quests() {
  const quests = await fetch(process.env.BE_URL + "/api/quests/getmyquests", {
    headers: {
      Authorization: "Bearer " + process.env.AUTH_TOKEN,
    },
    method: "GET",
  }).then((res) => res.json());

  const userData = await fetch(process.env.BE_URL + "/api/users/myInfo", {
    headers: {
      Authorization: "Bearer " + process.env.AUTH_TOKEN,
    },
    method: "GET",
  }).then((res) => res.json());

  return (
    <div className="min-h-screen w-screen pb-20">
      <div className="flex flex-col gap-2 p-4">
        <QuestView quests={quests.quests} />
        <SmallMapView />
        <br />
        <div className="text-3xl font-bold">
          Shop
          <span className="ml-2 text-lg font-normal">
            {userData.points} points available
          </span>
        </div>
        <Shop />
      </div>
    </div>
  );
}
