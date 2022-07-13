export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <br />
      <input {...otherProps} />
    </div>
  );
};
