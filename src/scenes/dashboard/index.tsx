//const SideBar:React.FC<UserInfoProps> = ({currentUser}):React.ReactElement =>{

import { Box } from "@mui/material";
import Header from "../../components/header/header.components";

const DashBoard:React.FC = ():React.ReactElement =>{

    return(
    <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to yor dashboard"/>
        </Box>
    </Box>
    )
}

export default DashBoard;