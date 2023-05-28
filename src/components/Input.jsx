const Input = ({ placeholder, type, value }) => {
  return (
    <>
      <input
        style={{ float: "right" }}
        placeholder={placeholder}
        type={type}
        value={value}
        required
      />
    </>
  );
};

export default Input;
