import { useAppSelector } from '../../../../store/hooks';
import { selectPickpointState } from '../../state/selectors';

import { Item } from './item';

export const Menu = () => {
  const { list } = useAppSelector(selectPickpointState);

  console.log('Menu');

  return (
    <ul>
      {list.map(item => (
        <Item key={item.address} location={item} />
      ))}
    </ul>
  );
};
