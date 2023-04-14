import { SyntheticEvent, useRef, useState } from 'react';
import { X } from 'react-feather';
import { Button } from '../button/Button';

interface ModalProps {
  modalIsOpen: boolean;
  closeModal: () => void;
  handleSubmitForm: (name: string, description: string, comment: string) => void;
}
export function Modal({ modalIsOpen, closeModal, handleSubmitForm }: ModalProps) {
  const overlay = useRef(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [comment, setComment] = useState("");

  // Close the modal when user click outside of it
  const handleClickOverlay = (e: any) => {
    if (e.target.id === "overlay") closeModal();
  };

  document.addEventListener('mousedown', handleClickOverlay);

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    handleSubmitForm(name, description, comment);
    setName("");
    setDescription("");
    setComment("");
    closeModal();
  };

  return (
    <div ref={overlay} id="overlay" className={`${modalIsOpen ? "flex-col" : "hidden"} absolute w-full h-screen align-middle justify-center top-0 right-0 bottom-0 left-0 m-auto bg-black bg-opacity-30`}>
      <div className="absolute bg-[#00be96] align-middle justify-center top-0 sm:top-[-100px] sm:right-0 sm:bottom-0 sm:left-0 w-full h-screen sm:m-auto sm:w-[468px] sm:h-fit sm:rounded-2xl">
        <div onClick={closeModal} className="absolute right-0 m-5 cursor-pointer">
          <X className="text-white" />
        </div>
        <h2 className="m-4 ml-6 text-white text-xl">Créer un nouveau projet</h2>
        <div className="mx-6 mt-8 mb-6">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} >
            {/** TODO Créer un composant réutilisable */}
            <input required className="outline-none bg-[#ffffff4f] rounded-xl p-3 w-full text-white placeholder:text-white" type="text" value={name} placeholder="Nom du projet" onChange={(e) => setName(e.target.value)} />
            <input required className="outline-none bg-[#ffffff4f] rounded-xl p-3 w-full text-white placeholder:text-white" type="text" value={description} placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
            <input required className="outline-none bg-[#ffffff4f] rounded-xl p-3 w-full text-white placeholder:text-white" type="text" value={comment} placeholder="Commentaire" onChange={(e) => setComment(e.target.value)} />
            <div className="flex justify-end mt-3">
              <Button>Créer le projet</Button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}