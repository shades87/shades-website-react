import Shades from "../assets/images/shades.png";
import { Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/material";

function Home() {
    return(
        <Box>
            <Toolbar />
            <Typography variant="h3">shadyshadyshades</Typography>
            <img src={Shades} alt="sunglasses logo"></img>
            <Typography>app development!</Typography>
            <Typography>shadyshadyshades@hotmail.com</Typography>
        </Box>
    );
}

export default Home;