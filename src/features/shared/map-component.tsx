import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

import { DEFAULT_CENTER, DEFAULT_ZOOM, LOCATION_ZOOM } from '../../constants';
import { IPickPoint } from '../../types';

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

  // Желательно провайдер YMaps нужно поставить выше
  // всех возможных компонентов, которые будут использовать карты
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
