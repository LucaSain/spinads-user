"use client";
import Map from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MapView = () => {
  return (
    <div className="relative z-0 h-full w-full rounded-xl">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/lucasainenco/clo9pjg5000rp01qxh60taxwj"
      />
    </div>
  );
};

export default MapView;
