import { IPickPoint } from '../../../../types';
import { useAppDispatch } from '../../../../store/hooks';
import { setLocation } from '../../state/actions';

type Props = {
  location: IPickPoint;
};

export const Item = ({ location }: Props) => {
  const dispatch = useAppDispatch();

  const { address, budgets } = location;

  const optionsText = budgets.join(' and ');

  const onClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(setLocation(location));
  };

  console.log('Menu item');

  return (
    <li>
      <a href="#" onClick={onClick} aria-label={`${address}, ${optionsText}`}>
        <h2>{address}</h2>
        <div>
          {budgets.map(budget => (
            <span key={budget}>{budget}</span>
          ))}
        </div>
      </a>
    </li>
  );
};
