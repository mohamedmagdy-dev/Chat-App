export default function CheckBox({ label, isChecked, onChange }) {
  return (
    <label htmlFor={label} className="flex items-center gap-1 cursor-pointer text-gray-400 text-sm">
      <input
        type="checkbox"
        id={label}
        checked={isChecked}
        className=""
        onChange={() => onChange((prev) => !prev)}
      />
      {label}
    </label>
  );
}
