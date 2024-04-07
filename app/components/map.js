"use client";
import Map from "react-map-gl";
import { useRef, useEffect } from "react";
import { Marker, GeolocateControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
const MapView = () => {
  const geoControlRef = useRef();

  useEffect(() => {
    // Activate as soon as the control is loaded
    geoControlRef.current?.trigger();
  }, [geoControlRef.current]);
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
        <GeolocateControl ref={geoControlRef} showAccuracyCircle />
      </Map>
    </div>
  );
};

export default MapView;
