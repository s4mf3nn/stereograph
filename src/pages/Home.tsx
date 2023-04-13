import { Column } from "react-table";
import { Table } from "../components";
import db from '../utils/db.json';

interface Item {
  // id: number;
  name: string;
  description: string;
  comment: string;
  step: string;
}
export default function Home() {
  const data: Item[] = [];

  db.projects.map(project => {
    data.push({
      name: project.nom,
      description: project.description,
      comment: project.commentaire,
      step: project.etape,
    });
  });

  const columns = [
    {
      Header: 'Nom',
      accessor: 'name',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Commentaire',
      accessor: 'comment',
    },
    {
      Header: 'Etape',
      accessor: 'step',
    },
  ];

  return (
    <div className="flex justify-center">
      <Table
        data={data}
        columns={columns as Column[]}
      />
    </div>
  );
}
