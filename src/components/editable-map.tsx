import React, { useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import SearchPlaces from "./editable-map-search";
import { Stack } from "@mui/material";
const NEXT_PUBLIC_GOOGLE_MAPS_API_KEY = "AIzaSyAD7CbA37zs-1dNz4EotuGsjbxnB7_FjYQ";
// API key (important)
// 1) Go to console.cloud.google.com and enable Google Maps javascript API, Places API and Reverse geocoding API (from APIs and Services).
// 2) Go to credentials and create API key from +CREATE CREDENTIALS.
// 3) API key needs to be declared in .env.local with the same variable name.
// 4) Replace googleMapsApiKey on useLoadScript to be process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.
const googleLibs = "places";
type editableMapPropsType = {
  setAddress: (e: string) => void;
  setLatLng: (e: google.maps.LatLngLiteral) => void;
  pin?: google.maps.LatLngLiteral;
  position?: google.maps.LatLngLiteral;
  setPosition: (value: google.maps.LatLngLiteral) => void;
};
const EditableMap = ({
  setAddress,
  setLatLng,
  pin,
  position,
  setPosition,
}: editableMapPropsType) => {
  /* const [position, setPosition] = React.useState<google.maps.LatLngLiteral>(); */
  const [place, setPlace] = React.useState<google.maps.LatLngLiteral>();
  const mapRef = React.useRef<GoogleMap>();
  const center = React.useMemo<google.maps.LatLngLiteral>(
    () => (position ? position : { lat: 32.889128680305255, lng: 13.190395196745683 }),
    [position]
  );

  // Getting pin location
  /* useEffect(() => {
    if (pin) setPosition(pin);

    console.log(position);
  }, []); */
  // Declaring the map's options
  const options = React.useMemo<google.maps.MapOptions>(
    () => ({ disableDefaultUI: true, clickableIcons: false }),
    []
  );

  // Loading the map script
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: [googleLibs],
  });

  // Putting a marker
  const putMarker = (e: any) => {
    console.log(e)
    const newPosition = { lat: e.latLng.lat(e), lng: e.latLng.lng(e) };
    setPosition(newPosition);
    setLatLng(newPosition);
    setAddress("تم تحديد العنوان"); 
  };
  // Add mapRef to the map after being loaded

  const onLoad = React.useCallback((map: GoogleMap) => (mapRef.current = map), []);

  return (
    <>
      {isLoaded && (
        <Stack direction="column" spacing={2} sx={{ width: "100%", height: "500px" }}>
          <SearchPlaces
            setPlace={(position) => {
              setPlace(position);
              mapRef.current?.panTo(position);
            }}
          />
          <GoogleMap
            zoom={10}
            center={center}
            mapContainerClassName="editable-map"
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={options}
            onClick={(e: any) => {
              putMarker(e);
            }}
            onLoad={(e: any) => {
              onLoad(e);
            }}
          >
            {mapRef.current && position && <Marker position={position} />}
          </GoogleMap>
        </Stack>
      )}
    </>
  );
};

export default EditableMap;
