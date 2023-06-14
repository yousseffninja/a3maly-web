import React from "react";
import { Autocomplete, TextField, FormControl } from "@mui/material";
import usePlacesAutoComplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { useTranslation } from "react-i18next";

type SearchPlacesProps = {
  setPlace: (position: google.maps.LatLngLiteral) => void;
};

const SearchPlaces = ({ setPlace }: SearchPlacesProps) => {
  const [options, setOptions] = React.useState<any[]>([]);

  const { t } = useTranslation();
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutoComplete();

  const suggestedPlaces = data.map(({ place_id, description }) => {
    return description;
  });
  const handleSelect = async (val: any) => {
    const location = val.target.value;
    setValue(location, false);
    clearSuggestions();
    const results = await getGeocode({ address: location });
    const { lat, lng } = getLatLng(results[0]);
    setPlace({ lat, lng });
  };
  return (
    <>
      <Autocomplete
        onSelect={handleSelect}
        freeSolo
        disableClearable
        options={suggestedPlaces}
        renderInput={(params) => (
          <TextField
            {...params}
            label={t("Search a location")}
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        )}
      />
    </>
  );
};

export default SearchPlaces;
