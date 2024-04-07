"use client";
import Map from "react-map-gl";
import { Marker, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MapView = () => {
  return (
    <div className="relative z-0 h-full w-full rounded-xl">
      <Map
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}
        initialViewState={{
          longitude: 26.043453285250337,
          latitude: 44.48316905768178,
          zoom: 14,
        }}
        mapStyle="mapbox://styles/lucasainenco/clo9pjg5000rp01qxh60taxwj"
      >
        <Marker
          longitude={26.043453285250337}
          latitude={44.48316905768178}
          anchor="bottom"
        >
          <img className="h-16" src="/bike.png" />
        </Marker>
        <GeolocateControl />
      </Map>
    </div>
  );
};

export default MapView;
