export interface AsyncSearchProps {
  placeholder: string;
  onDebounceChange: (debounceTerm: string) => void;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

export interface MessageProps {
  text: string;
}

export interface DropdownProps {
  title: string;
  items: Item[];
  onItemSelect: (item: Item) => void;
}

export interface Location {
  lat: number;
  lng: number;
}

export type POI = 'all' | 'gas_station' | 'restaurant' | 'lodging';

export interface Place {
  place_id: string;
  geometry: {
    location: Location;
  };
  types: string[];
}

export interface Item {
  value: number | POI;
  label: string;
}

export interface TruckApiResponse {
  id: number;
  licencePlate: string;
  locationHistory: Location[];
}
