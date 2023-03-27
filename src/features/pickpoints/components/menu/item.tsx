type Props = {
  address: string;
  options: string[];
};

export const Item = ({ address, options }: Props) => {
  const optionsText = options.join(' and ');

  return (
    <li>
      <a href="#" aria-label={`${address}, ${optionsText}`}>
        <h2>{address}</h2>
        <div>
          {options.map(option => (
            <span key={option}>{option}</span>
          ))}
        </div>
      </a>
    </li>
  );
};
