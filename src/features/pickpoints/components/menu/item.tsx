import { IPickPoint } from '../../../../types';
import { useAppDispatch } from '../../../../store/hooks';
import { setLocation } from '../../state/actions';
import { Budget } from '../../../shared';

type Props = {
  location: IPickPoint;
};

export const Item = ({ location }: Props) => {
  const dispatch = useAppDispatch();

  const { address, budgets } = location;

  // Стараемся формировать внятный текст для скрин ридеров
  const optionsText = budgets.join(' and ');

  const onClick = (event: React.SyntheticEvent) => {
    event.preventDefault();

    dispatch(setLocation(location));
  };

  return (
    <li>
      <a href="#" onClick={onClick} aria-label={`${address}, ${optionsText}`}>
        <h2>{address}</h2>
        <div>
          {budgets.map(budget => (
            <Budget key={budget} text={budget} />
          ))}
        </div>
      </a>
    </li>
  );
};
