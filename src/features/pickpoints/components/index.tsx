import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchPickpoints } from '../state/actions';
import { selectPickpointState } from '../state/selectors';

import { MapComponent, Loader } from '../../shared';

import { Menu } from './menu';

export const Pickpoints = () => {
  const dispatch = useAppDispatch();

  const { pending, error, currentLocation } =
    useAppSelector(selectPickpointState);

  useEffect(() => {
    dispatch(fetchPickpoints());
  }, []);

  if (pending) return <Loader />;

  if (error) return <h2>{error}</h2>;

  return (
    <div className="pickpoints">
      <main>
        <nav>
          <Menu />
        </nav>
      </main>
      <aside aria-label="Map of pickpoints">
        <MapComponent currentLocation={currentLocation} />
      </aside>
    </div>
  );
};
