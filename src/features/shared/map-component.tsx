import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { IPickPoint } from '../../types';

const DEFAULT_CENTER = [56.837631, 60.597622];
const DEFAULT_ZOOM = 5;
const LOCATION_ZOOM = 15;

type Props = {
  currentLocation: IPickPoint | null;
};

export const MapComponent = ({ currentLocation }: Props) => {
  const defaultState = {
    center: DEFAULT_CENTER,
    zoom: DEFAULT_ZOOM,
  };

  const state = currentLocation
    ? {
        center: [currentLocation.latitude, currentLocation.longitude],
        zoom: LOCATION_ZOOM,
      }
    : undefined;

  console.log('Map component');

  return (
    <YMaps>
      <Map
        defaultState={defaultState}
        state={state}
        width={'100%'}
        height={'100%'}
      >
        {currentLocation && (
          <Placemark
            geometry={[currentLocation.latitude, currentLocation.longitude]}
          />
        )}
      </Map>
    </YMaps>
  );
};
