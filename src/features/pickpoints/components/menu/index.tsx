import { Item } from './item';

export const Menu = () => {
  const items = [
    {
      address: 'Address 1',
      options: ['Pickup', 'Delivery'],
    },
    {
      address: 'Address 2',
      options: ['Pickup', 'Delivery', 'Showroom'],
    },
  ];

  return (
    <ul>
      {items.map(item => (
        <Item
          key={item.address}
          address={item.address}
          options={item.options}
        />
      ))}
    </ul>
  );
};
