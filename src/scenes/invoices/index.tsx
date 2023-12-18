import { Box, SxProps, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Token, tokens } from '../../../theme';
import { mockDataInvoices } from '../../data/mockData';
import Header from '../../components/header/header.components';
import { Theme } from '@emotion/react';

type DataGridRow = {
  row: {
    cost: string;
  };
};

const propsDataGridContainer = (colors: Token): SxProps<Theme> => {
  return {
    '& .MuiDataGrid-root': {
      border: 'none',
    },
    '& .MuiDataGrid-cell': {
      borderBottom: 'none',
    },
    '& .name-column--cell': {
      color: colors.greenAccent[300],
    },
    '& .MuiDataGrid-columnHeaders': {
      backgroundColor: colors.blueAccent[700],
      borderBottom: 'none',
    },
    '& .MuiDataGrid-virtualScroller': {
      backgroundColor: colors.primary[400],
    },
    '& .MuiDataGrid-footerContainer': {
      borderTop: 'none',
      backgroundColor: colors.blueAccent[700],
    },
    '& .MuiCheckbox-root': {
      color: `${colors.greenAccent[200]} !important`,
    },
  };
};

const idField = () => {
  return { field: 'id', headerName: 'ID' };
};
const nameField = () => {
  return {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    cellClassName: 'name-column--cell',
  };
};
const phoneField = () => {
  return {
    field: 'phone',
    headerName: 'Phone Number',
    flex: 1,
  };
};
const emailField = () => {
  return {
    field: 'email',
    headerName: 'Email',
    flex: 1,
  };
};
const costField = (colors: Token) => {
  return {
    field: 'cost',
    headerName: 'Cost',
    flex: 1,
    renderCell: (data: DataGridRow) => (
      <Typography color={colors.greenAccent[500]}>${data.row.cost}</Typography>
    ),
  };
};
const dateField = () => {
  return {
    field: 'date',
    headerName: 'Date',
    flex: 1,
  };
};

const Invoices = (): React.ReactElement => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    idField(),
    nameField(),
    phoneField(),
    emailField(),
    costField(colors),
    dateField(),
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of Invoice Balances" />
      <Box m="40px 0 0 0" height="75vh" sx={propsDataGridContainer(colors)}>
        <DataGrid checkboxSelection rows={mockDataInvoices} columns={columns} />
      </Box>
    </Box>
  );
};

export default Invoices;
