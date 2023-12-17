import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import {ProSidebar,Menu,MenuItem} from "react-pro-sidebar";
import {Box,IconButton,SxProps,Typography,useTheme} from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../../theme";
import { HomeOutlined ,
    ContactsOutlined,
    ReceiptOutlined,
    PersonOutlined,
    CalendarTodayOutlined,
    HelpOutlineOutlined,
    BarChartOutlined,
    PieChartOutlineOutlined,
    TimelineOutlined,
    MenuOutlined,
    MapOutlined} from "@mui/icons-material";
import { Theme } from "@emotion/react";



type ItemProps = {
    title:string, 
    to:string, 
    icon:React.ReactNode, 
    selected:string, 
    setSelected:(isSelected:string)=>void
}

type MenuIconProps = {
    isCollapsed:boolean
    label:React.ReactNode|undefined
}

const Item: React.FC<ItemProps> = (props):React.ReactElement =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return(
        <MenuItem
            active={props.selected === props.title}
            style={{
                color:colors.grey[100]
            }}
            onClick={() => props.setSelected(props.title)}
            icon={props.icon}
        >
            <Typography>{props.title}</Typography>
            <Link to={props.to}/>
        </MenuItem>
    );
};

const propsBoxContainer = (color:string):SxProps<Theme> =>{
    return { "& .pro-sidebar-inner": { background: `${color} !important`,},
    "& .pro-icon-wrapper": { backgroundColor: "transparent !important",},
    "& .pro-inner-item": { padding: "5px 35px 5px 20px !important",},
    "& .pro-inner-item:hover": { color: "#868dfb !important",},
    "& .pro-menu-item.active": { color: "#6870fa !important",}}
}

const SideBar = ():React.ReactElement =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed,setIsCollapsed] = useState(false);
    const [selected,setSelected] = useState("Dashboard");

    const toggleCollapsed = () =>{ setIsCollapsed(!isCollapsed);}

    const TopLogo: React.FC<MenuIconProps> = (props):React.ReactElement =>{
        return(
            <MenuItem
                onClick={toggleCollapsed}
                icon={isCollapsed ? <MenuOutlined/> : undefined}
                style={{margin:"10px 0 20px 0",color: colors.grey[100],}}>
                {!props.isCollapsed && (props.label)}
            </MenuItem>
        )
    }

    const TopLabel = ():React.ReactElement =>{
        return(
        <Box display="flex" justifyContent="space-between" alignItems="center" ml="15px">
        <Typography>
            ADMINS
        </Typography>
        <IconButton onClick={toggleCollapsed}>
            <MenuOutlined/>
        </IconButton>
        </Box>
    )};


    const UserInfo = ():React.ReactElement =>{
        return(
            <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
            <img  width="100px" height="100px" src="../../assets/tpIcon2.png" style={{cursor:"pointer",borderRadius:"50%"}}/>
            </Box>
            <Box textAlign="center">
            <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{m:"10px 0 0 0"}}>
            Fredrik Sundstrom
            </Typography>
            <Typography variant="h5" color={colors.greenAccent[500]}>
                VP Fancy Admin
            </Typography>
            </Box>
            </Box>
        );
    }

    const MenuIcons = ():React.ReactElement =>{
        return(
            <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                <Item 
                title="Dashboard"
                to="/"
                icon={<HomeOutlined/>}
                selected={selected}
                setSelected={setSelected}
                />
                <Typography
                 variant="h6" color={colors.grey[300]} sx={{m: "15px 0 5px 20px"}}>
                 Data
                </Typography>
                <Item
                title="Contacts Information"
                to="/contacts"
                icon={<ContactsOutlined />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlined />}
                selected={selected}
                setSelected={setSelected}
                />
                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}>
                Pages
                </Typography>
                <Item
                title="Profile Form"
                to="/form"
                icon={<PersonOutlined />}
                selected={selected}
                setSelected={setSelected}/>
                <Item
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlined />}
                selected={selected}
                setSelected={setSelected}/>
                <Item
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlined />}
                selected={selected}
                setSelected={setSelected}
                />

                <Typography
                variant="h6"
                color={colors.grey[300]}
                sx={{ m: "15px 0 5px 20px" }}
                >
                Charts
                </Typography>
                <Item
                title="Bar Chart"
                to="/bar"
                icon={<BarChartOutlined />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Pie Chart"
                to="/pie"
                icon={<PieChartOutlineOutlined />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Line Chart"
                to="/line"
                icon={<TimelineOutlined />}
                selected={selected}
                setSelected={setSelected}
                />
                <Item
                title="Geography Chart"
                to="/geography"
                icon={<MapOutlined />}
                selected={selected}
                setSelected={setSelected}
                />
            </Box>
        );
    }


    return(
        <Box sx={propsBoxContainer(colors.primary[400])}
        >
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconShape="square">
                <TopLogo
                isCollapsed={isCollapsed} 
                label={<TopLabel/>}>
                </TopLogo> 
                {!isCollapsed && <UserInfo/>}
                <MenuIcons/>
            </Menu>
        </ProSidebar>
        </Box>
    )
}

export default SideBar;