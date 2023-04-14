import { Edit } from 'react-feather';

interface ButtonProps {
  children: string;
  onClick?: () => void;
}
export function Button({ onClick, children }: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-[#f7ca6a] text-black text-sm font-semibold px-6 py-2 rounded-lg flex items-center gap-2">
      <Edit className="w-4" />
      {children}
    </button>);
}