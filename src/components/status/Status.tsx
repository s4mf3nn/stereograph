interface StatusProps {
  type: 'En attente' | 'En cours' | 'Terminé';
}

export function Status({ type }: StatusProps) {
  return (
    <>
      {type === 'En attente' && (
        <div className="bg-[#f7ca6a] text-black text-xs font-bold rounded-lg flex items-center gap-2 w-fit px-3 py-2">
          <div className="bg-black w-1.5 h-1.5 rounded-full"></div>En attente
        </div>
      )}
      {type === 'En cours' && (
        <div className="bg-[#00be96] text-black text-xs font-bold rounded-lg flex items-center gap-2 w-fit px-3 py-2">
          <div className="bg-black w-1.5 h-1.5 rounded-full"></div>En cours
        </div>
      )}
      {type === 'Terminé' && (
        <div className="bg-[#c17fd0] text-black text-xs font-bold rounded-lg flex items-center gap-2 w-fit px-3 py-2">
          <div className="bg-black w-1.5 h-1.5 rounded-full"></div>Terminé
        </div>
      )}
    </>
  );
}