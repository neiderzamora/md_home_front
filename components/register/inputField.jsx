export const InputField = ({
  id,
  name,
  label,
  type = "text",
  required = false,
  colchange,
  ...props
}) => (
  <div className={`sm:col-span-3 ${colchange}`}>
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <div className="mt-2">
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        {...props}
      />
    </div>
  </div>
);
