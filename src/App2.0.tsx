import { ColorModeContext,useMode } from "../theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import TopBar from "./scenes/global/TopBar";
import { Route, Routes } from "react-router-dom";
import Bar  from "./scenes/bar";
import Calendar  from "./scenes/calendar";
import Contacts  from "./scenes/contacts";
import Dashboard  from "./scenes/dashboard";
import Faq  from "./scenes/faq";
import Form  from "./scenes/form";
import Geography  from "./scenes/geography";
import Invoices  from "./scenes/invoices";
import Line  from "./scenes/line";
import Pie  from "./scenes/pie";
import Team  from "./scenes/team";
import SideBar from "./scenes/global/SideBar";
import { useState } from "react";
import "./sass/index.scss";

const App2:React.FC = ():React.ReactElement => {
    const mode = useMode();
    const [isSidebar,setIsSidebar] = useState(true);
    return(
        <ColorModeContext.Provider value={mode.colorMode}>
            <ThemeProvider theme={mode.theme}>
                <CssBaseline/>
                <div className="app">
                    <SideBar/>
                    <main className="content">
                        <TopBar/>
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/contacts" element={<Contacts />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/geography" element={<Geography />} />
                            <Route path="/invoices" element={<Invoices />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/team" element={<Team />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App2;