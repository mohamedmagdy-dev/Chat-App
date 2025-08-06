export default function Input({
  type,
  placeHolder,
  value,
  onChange,
  name,
  defaultValue,
}) {
  return (
    <input
      defaultValue={defaultValue}
      type={type}
      name={name}
      placeholder={placeHolder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${
        value.length >= 1 ? "text-dark" : "text-gray-400"
      }  outline-none pl-4 p-3 text-sm border border-gray-300 dark:bg-[#292929] dark:border-none rounded
      dark:text-white w-full `}
    />
  );
}
