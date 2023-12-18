//const SideBar:React.FC<UserInfoProps> = ({currentUser}):React.ReactElement =>{
import { Box, SxProps } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Token, tokens } from '../../../theme';
import { mockDataContacts } from '../../data/mockData';
import Header from '../../components/header/header.components';
import { useTheme } from '@mui/material';
import { Theme } from '@emotion/react';

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
    '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
      color: `${colors.grey[100]} !important`,
    },
  };
};

const idField = () => {
  return { field: 'id', headerName: 'ID', flex: 0.5 };
};
const registrarIdField = () => {
  return { field: 'registrarId', headerName: 'Registrar ID' };
};
const nameField = () => {
  return {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    cellClassName: 'name-column--cell',
  };
};
const ageField = () => {
  return {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    headerAlign: 'left',
    align: 'left',
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
const addressField = () => {
  return {
    field: 'address',
    headerName: 'Address',
    flex: 1,
  };
};
const cityField = () => {
  return {
    field: 'city',
    headerName: 'City',
    flex: 1,
  };
};
const zipcodeField = () => {
  return {
    field: 'zipCode',
    headerName: 'Zip Code',
    flex: 1,
  };
};

const Contacts = (): React.ReactElement => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    idField(),
    registrarIdField(),
    nameField(),
    ageField(),
    phoneField(),
    emailField(),
    addressField(),
    cityField(),
    zipcodeField(),
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box m="40px 0 0 0" height="75vh" sx={propsDataGridContainer(colors)}>
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
