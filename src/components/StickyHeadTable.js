import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Name', minWidth: 100 },
  { id: 'ondate', label: 'Onboarding\u00a0Date', minWidth: 60,format: (value) => value.toLocaleString('en-US'), },
  {
    id: 'date',
    label: 'Go\u00a0Live\u00a0date',
    minWidth: 60,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'userbase',
    label: '\u00a0User\u00a0base',
    minWidth: 20,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'billing',
    label: 'Last\u00a0billing',
    minWidth: 75,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'Status',
    label: 'Status',
    minWidth: 35,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function createData(name, ondate, date, userbase ,billing ,Status) {
    
  return {name, ondate, date,userbase,  billing,Status }
}

const rows = [
  createData('Texlaculture', '12 jan 2022', '7 Aug 2022', 244,'7 Aug 2023', 'Active'),
  createData('Pinch life', '11 Feb 2022', '6 May 2022', 1000,'7 Aug 2023','Active'),
  createData('OBuddy', '10 Sep 2022', '5 Oct 2022', 150,'7 Aug 2023','Active'),
  createData('Texlaculture', '12 jan 2022', '7 Aug 2022', 244,'7 Aug 2023', 'Active'),
  createData('Pinch life', '11 Feb 2022', '6 May 2022', 1000,'7 Aug 2023','Active'),
  createData('OBuddy', '10 Sep 2022', '5 Oct 2022', 150,'7 Aug 2023','Active'),
  createData('Texlaculture', '12 jan 2022', '7 Aug 2022', 244,'7 Aug 2023', 'Active'),
  createData('Pinch life', '11 Feb 2022', '6 May 2022', 1000,'7 Aug 2023','Active'),
  createData('OBuddy', '10 Sep 2022', '5 Oct 2022', 150,'7 Aug 2023','Active'),
  createData('Texlaculture', '12 jan 2022', '7 Aug 2022', 244,'7 Aug 2023', 'Active'),
  createData('Pinch life', '11 Feb 2022', '6 May 2022', 1000,'7 Aug 2023','Active'),
 
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align} className='sample'>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5,10,25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
