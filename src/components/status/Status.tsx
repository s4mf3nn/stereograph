interface StatusProps {
  type: 'En attente' | 'En cours' | 'Terminé';
}

export function Status({ type }: StatusProps) {
  return (
    <>
      {type === 'En attente' && (
        <div className="bg-[#fff3f5] text-[#d84d42] text-xs font-semibold rounded-full flex items-center gap-2 w-fit px-3 py-1">
          <div className="bg-[#d84d42] w-1.5 h-1.5 rounded-full"></div>En attente
        </div>
      )}
      {type === 'En cours' && (
        <div className="bg-[#eff7fe] text-[#4277cc] text-xs font-semibold rounded-full flex items-center gap-2 w-fit px-3 py-1">
          <div className="bg-[#4277cc] w-1.5 h-1.5 rounded-full"></div>En cours
        </div>
      )}
      {type === 'Terminé' && (
        <div className="bg-[#ebfdf3] text-[#13b76b] text-xs font-semibold rounded-full flex items-center gap-2 w-fit px-3 py-1">
          <div className="bg-[#13b76b] w-1.5 h-1.5 rounded-full"></div>Terminé
        </div>
      )}
    </>
  );
}