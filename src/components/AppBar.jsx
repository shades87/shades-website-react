import AppBarMUI from "@mui/material/AppBar";
import { Tabs, Tab } from "@mui/material";
import { Box, Toolbar } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";

function AppBar(pathname) {
  const nav = useNavigate();
  const navigation = (destination) => {
    nav(destination);
  }
  const handleChange = (event, newValue) => {
    navigation(newValue);
  }

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBarMUI position="absolute">
        <Tabs
          onChange={handleChange}
          value={pathname}
          textColor="#f2f1f8">
          <Tab label="home" value="/"/>
          <Tab label="sleepyhead app" value="/sleepyhead-app" />
          <Tab label="about" value="/about"/>
        </Tabs>
      </AppBarMUI>
      <Toolbar />
      <Toolbar />
      <Outlet />
    </Box>
 )   
}

export default AppBar;