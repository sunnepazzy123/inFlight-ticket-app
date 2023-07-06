const renderCell = (params: { row: { status: any } }) => {
  return (
    <div className={`cellWithStatus ${params.row.status}`}>
      {params.row.status}
    </div>
  );
};

export const ticketColumns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'client',
    headerName: 'client',
    width: 230,
  },

  {
    field: 'issue',
    headerName: 'issue',
    width: 100,
  },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
    renderCell: renderCell,
  },
  {
    field: 'deadline',
    headerName: 'deadline',
    width: 100,
  },
];
