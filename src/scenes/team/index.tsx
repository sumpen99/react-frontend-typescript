import { Box, SxProps, Typography, useTheme } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { Token, tokens } from '../../../theme';
import { mockDataTeam } from '../../data/mockData';
import {
  AdminPanelSettingsOutlined,
  LockOpenOutlined,
  SecurityOutlined,
} from '@mui/icons-material';
import Header from '../../components/header/header.components';
import { Theme } from '@emotion/react';

type DataGridRow = {
  row: {
    access: string;
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
const accesslevelField = (colors: Token) => {
  return {
    field: 'accessLevel',
    headerName: 'Access Level',
    flex: 1,
    renderCell: (data: DataGridRow) => {
      return (
        <Box
          width="60%"
          m="0 auto"
          p="5px"
          display="flex"
          justifyContent="space-between"
          bgcolor={getColorBasedOnRoll(data.row.access, colors)}
          borderRadius="4px"
        >
          {getIconBasedOnRoll(data.row.access)}
          <Typography color={colors.grey[100]} sx={{ ml: '5px' }}>
            {data.row.access}
          </Typography>
        </Box>
      );
    },
  };
};

const getColorBasedOnRoll = (role: string, colors: Token): string => {
  switch (role) {
    case 'admin':
      return colors.greenAccent[600];
    case 'manager':
      return colors.greenAccent[700];
    default:
      return colors.greenAccent[700];
  }
};

const getIconBasedOnRoll = (role: string): React.ReactNode | undefined => {
  switch (role) {
    case 'admin':
      return <AdminPanelSettingsOutlined />;
    case 'manager':
      return <SecurityOutlined />;
    case 'user':
      return <LockOpenOutlined />;
    default:
      return undefined;
  }
};

const Team = (): React.ReactElement => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    idField(),
    nameField(),
    ageField(),
    phoneField(),
    emailField(),
    accesslevelField(colors),
  ];

  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box m="40px 0 0 0" height="75vh" sx={propsDataGridContainer(colors)}>
        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
  );
};

export default Team;
