interface CheckboxProps {
  label: string;
  isChecked: boolean;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export function Checkbox({ label, isChecked, handleClick }: CheckboxProps) {
  return (
    <label>
      <input
        className=""
        type="checkbox"
        name={label}
        checked={isChecked}
        onChange={handleClick}
      />
      {label}
    </label>
  );
}