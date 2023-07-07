import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

interface IDatatableProps {
  list: any;
  column: any;
  name: string;
  handlerOption: (id: string, name: string) => void;
}

const Datatable = ({ list, column, name, handlerOption }: IDatatableProps) => {
  const handler = (event: any, id: string) => {
    const name = event.target.getAttribute('name');
    handlerOption(id, name);
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params: any) => {
        return (
          <div className='cellAction'>
            <Link
              to={`/${name}/${params.row._id}`}
              style={{ textDecoration: 'none' }}
            >
              <div className='viewButton'>View</div>
            </Link>
            <div
              className='deleteButton'
              /* @ts-ignore */
              name='edit'
              // onClick={(e) => handleModal()}
            >
              Edit
            </div>
            <div
              className='deleteButton'
              /* @ts-ignore */
              name='delete'
              onClick={(e) => handler(e, params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='datatable'>
      <h2>{name}</h2>
      <div className='datatableTitle'>
        Add New {name}
        <Link to={`/${name}/new`} className='link'>
          Add New
        </Link>
      </div>
      <DataGrid
        className='datagrid'
        rows={list}
        columns={column?.concat(actionColumn)}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
