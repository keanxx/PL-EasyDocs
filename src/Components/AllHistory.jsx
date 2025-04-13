import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const AllHistory = () => {
 
  const columns = [
    { id: 'requestNum', label: 'Request Number', minWidth: 170 },
    { id: 'requestDocs', label: 'Requested Document', align: 'right' },
    { id: 'dateRequested', label: 'Date Requested', align: 'right' },
    { id: 'status', label: 'Status', align: 'right' },
    { id: 'remarks', label: 'Remarks', align: 'right' },
    
  ];

  const rows = [
    {
      requestNum: '12345345636',
      requestDocs: 'Registration Card',
      dateRequested: '04/12/25',
      status: 'Pending',
      remarks: 'Waiting for payment',
    },
    {
      requestNum: '12345345637',
      requestDocs: 'Certificate of Grades',
      dateRequested: '04/10/25',
      status: 'Completed',
      remarks: 'Ready for pickup',
    },
  ];

  return (
    <Accordion
      defaultExpanded={false}
      elevation={1}
      sx={{
        width: '100%',
        backgroundColor: '#D5E3FF', 
        '&:before': { display: 'none' }, 
        '&.Mui-expanded': { backgroundColor: '#ffffff' }, 
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel-content"
        id="panel-header"
        sx={{
          backgroundColor: '#D5E3FF',
          '&.Mui-expanded': { backgroundColor: '#D5E3FF' }, 
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 'bold',
            fontSize: '1.2rem',
          }}
        >
          All Request History
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TableContainer component={Paper} sx={{ boxShadow: 'none' }}>
          <Table size="small" aria-label="All Request History table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align || 'left'}
                    sx={{
                      minWidth: column.minWidth,
                      fontWeight: 'bold',
                      backgroundColor: '#D5E3FF',
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.id} align={column.align || 'left'}>
                      {row[column.id]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </AccordionDetails>
    </Accordion>
  );
};

export default AllHistory;