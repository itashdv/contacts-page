import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { IPickPoint } from '../../types';
import { DEFAULT_CENTER, DEFAULT_ZOOM, LOCATION_ZOOM } from '../../constants';

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
