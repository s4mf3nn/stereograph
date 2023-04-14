interface CheckboxProps {
  label: string;
  isChecked: boolean;
  handleClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// TODO: add color variables and dont repeat code
export function Checkbox({ label, isChecked, handleClick }: CheckboxProps) {
  const getCheckedStyle = () => {
    switch (label) {
      case "En attente":
        return "bg-[#f7ca6a] text-black text-xs font-bold border border-[#f7ca6a] rounded-lg flex items-center gap-2 w-fit px-3 py-2 cursor-pointer select-none";
      case "En cours":
        return "bg-[#00be96] text-black text-xs font-bold border border-[#00be96] rounded-lg flex items-center gap-2 w-fit px-3 py-2 cursor-pointer select-none";
      default:
        return "bg-[#c17fd0] text-black text-xs font-bold border border-[#c17fd0] rounded-lg flex items-center gap-2 w-fit px-3 py-2 cursor-pointer select-none";
    }
  };

  const getUncheckedStyle = () => {
    switch (label) {
      case "En attente":
        return "bg-transparent text-[#f7ca6a] border border-[#f7ca6a] text-xs font-bold rounded-lg flex items-center gap-2 w-fit px-3 py-2 cursor-pointer select-none";
      case "En cours":
        return "bg-transparent text-[#00be96] border border-[#00be96] text-xs font-bold rounded-lg flex items-center gap-2 w-fit px-3 py-2 cursor-pointer select-none";
      default:
        return "bg-transparent text-[#c17fd0] border border-[#c17fd0] text-xs font-bold rounded-lg flex items-center gap-2 w-fit px-3 py-2 cursor-pointer select-none";
    }
  };

  return (
    <label className={isChecked ? getCheckedStyle() : getUncheckedStyle()}>
      <input
        className="hidden"
        type="checkbox"
        name={label}
        checked={isChecked}
        onChange={handleClick}
      />
      {label}
    </label >
  );
}