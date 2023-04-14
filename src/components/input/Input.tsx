interface InputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}
export function Input({ value, placeholder, onChange }: InputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      required
      className="outline-none bg-[#ffffff4f] rounded-xl p-3 w-full text-white placeholder:text-white"
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};