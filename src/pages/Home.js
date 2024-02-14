import Shades from "../assets/images/shades.png";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";

function Home() {
    return(
        <Box>
            <Typography>Shadyshadyshades</Typography>
            <img src={Shades} alt="sunglasses logo"></img>
            <Typography>app development!</Typography>
            <Typography>shadyshdadyshades@hotmail.com</Typography>
        </Box>
    );
}

export default Home;