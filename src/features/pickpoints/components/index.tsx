import { MapComponent } from '../../shared';

import { Menu } from './menu';

export const Pickpoints = () => {
  return (
    <div className="pickpoints">
      <main>
        <nav>
          <Menu />
        </nav>
      </main>
      <aside aria-label="Map of pickpoints">
        <MapComponent />
      </aside>
    </div>
  );
};
