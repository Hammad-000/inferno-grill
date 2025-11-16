
const Checkbox = ({
  id,
  text,
  className,
  checkboxClassName,
  labelClassName,
  checked,
  ...props
}) => {
  return (
    <div className={`relative flex items-center ${className}`}>
      <div className="flex items-center h-5 ">
        <input
          id={id}
          type="checkbox"
          className={`w-4 h-4 rounded cursor-pointer
            ${checkboxClassName}`}
          checked={checked}
          {...props}
        />
      </div>

      {text && (
        <label
          htmlFor={id}
          className={`ml-3 text-md cursor-pointer font-medium 
            ${labelClassName}`}
        >
          {text}
        </label>
      )}
    </div>
  );
};
export default Checkbox;
