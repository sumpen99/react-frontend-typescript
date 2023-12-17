//const SideBar:React.FC<UserInfoProps> = ({currentUser}):React.ReactElement =>{
import { ColorModeContext, tokens } from "../../../theme";
import { useContext } from "react";
import { Box, IconButton, InputBase,useTheme } from "@mui/material";
import { Search,PersonOutlined,LightModeOutlined,DarkModeOutlined,NotificationsOutlined,SettingsOutlined } from "@mui/icons-material";

const TopBar = ():React.ReactElement =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorMode = useContext(ColorModeContext);

    //const handleSwitchColorMode = (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{ e.preventDefault();}
    const handleSwitchColorMode = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) =>{ 
        e.preventDefault(); 
        colorMode.toggleColorMode();
    }

    return(
        <Box display="flex" justifyContent="space-between" p={2}>
        {/* ***SEARCHBAR*** */}
            <Box display="flex" bgcolor={colors.primary[400]} borderRadius="3rem">
                <InputBase sx={{ml: 2,flex:1}} placeholder="Search"/>
                <IconButton type="button" sx={{p:1}}>
                    <Search/>
                </IconButton>
            </Box>
        {/* ***ICONS*** */}
        <Box display="flex" >
            <IconButton onClick={handleSwitchColorMode}>
                {theme.palette.mode === "dark" ? ( <DarkModeOutlined/>) : (<LightModeOutlined/>)}
            </IconButton>
            <IconButton>
                <NotificationsOutlined/>
            </IconButton>
            <IconButton>
                <SettingsOutlined/>
            </IconButton>
            <IconButton>
                <PersonOutlined/>
            </IconButton>

        </Box>
        </Box>
    )
}

export default TopBar;