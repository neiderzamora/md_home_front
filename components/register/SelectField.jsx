export const SelectField = ({
  id,
  name,
  label,
  options = [],
  required = false,
  ...props
}) => (
  <div className="sm:col-span-3">
    <label
      htmlFor={id}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <div className="mt-2">
      <select
        id={id}
        name={name}
        required={required}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        {...props}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  </div>
);
