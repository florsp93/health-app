export const FormInput = ({ label, ...otherProps }) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input {...otherProps} />
    </div>
  );
};
