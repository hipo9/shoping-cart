export const Input = ({ type, name, id, placeH, onChange, value }) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeH}
      onChange={onChange}
      value={value}
    />
  );
};
