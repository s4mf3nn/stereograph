import { useEffect, useState } from "react";
import { Button, Checkbox, Modal, Table } from "../components";
import db from '../utils/db.json';
import { Item } from '../types/common.type';

export default function Home() {
  const [data, setData] = useState<Item[]>([]);
  const [dataCopy, setDataCopy] = useState<Item[]>([]);
  const [isLoading, setIsloading] = useState<boolean>(true);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [filters, setFilters] = useState<any>({ // TODO: Solve any
    'En attente': true,
    'En cours': true,
    'Terminé': true,
  });

  useEffect(() => {
    getProjects();
  }, []);

  // Retrieve projects list from json file
  const getProjects = () => {
    const items: Item[] = [];

    db.projects.map(project => {
      items.push({
        id: project.id,
        name: project.nom,
        step: project.etape,
        description: project.description,
        comment: project.commentaire,
      });

      setData(items);
      setDataCopy(items);
      setIsloading(false);
    });
  };

  // Update the table when user select/unselect a filter
  useEffect(() => {
    if (!dataCopy.length) return;

    // Create an array of status
    const status: string[] = [];
    for (const [key, value] of Object.entries(filters)) value && status.push(key);

    const filteredData = dataCopy.filter(item => status.includes(item.step));

    setData(filteredData);
  }, [filters]);

  // Remove a project by index
  const handleDelete = (index: number) => {
    const updatedData = dataCopy.filter(item => item.id !== index);
    setData(updatedData);
    setDataCopy(updatedData);
  };

  // Update filters state when user select/unselect a filter
  const handleClickFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked
    });
  };

  const openModal = () => {
    document.body.style.overflowY = "hidden";
    setModalIsOpen(true);
  };

  const closeModal = () => {
    document.body.style.overflowY = "scroll";
    setModalIsOpen(false);
  };

  // Insert a new project
  const handleSubmitForm = (name: string, description: string, comment: string) => {
    const newItem = {
      id: data.length + 1,
      name,
      step: "En attente",
      description,
      comment,
    };
    setData([...data, { ...newItem }]);
    setDataCopy([...data, { ...newItem }]);
  };

  if (isLoading) {
    return <div className="flex justify-center mt-48">Chargement...</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-4 m-4 mt-10 sm:m-10">
        <h1 className="text-white font-semibold text-3xl">{data.length} Projet{data.length > 1 && "s"}</h1>
        <div className="flex flex-col gap-4 sm:flex-row justify-between mb-4">
          <div className="flex flex-row gap-3">
            {["En attente", "En cours", "Terminé"].map((label, i) => {
              return (
                <Checkbox
                  key={i}
                  label={label}
                  isChecked={filters[label]}
                  handleClick={handleClickFilter}
                />
              );
            })}
          </div>
          <div><Button onClick={openModal}>Ajouter un projet</Button></div>
        </div>
        <Table
          data={data}
          // columns={columns as Column[]}
          handleDelete={handleDelete}
        />
      </div>
      <Modal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmitForm={handleSubmitForm}
      />
    </>
  );
}
