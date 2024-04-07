import MapView from "./components/map";

export default async function Home() {
  const mapData = await fetch(
    process.env.BE_URL + "/api/bikes/getbikes/0/0/0/0",
    {
      headers: {
        Authorization: "Bearer " + process.env.AUTH_TOKEN,
      },
      method: "GET",
    },
  ).then((res) => res.json());

  return (
    <div className="h-screen w-screen">
      <div className="h-screen w-screen">
        <MapView mapData={mapData} />
      </div>
    </div>
  );
}
