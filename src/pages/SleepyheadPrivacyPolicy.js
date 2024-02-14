import { Typography, Box } from "@mui/material";
import Moonlogo from "../assets/images/moon.png"

function SleepyheadPrivacyPolicy() {

    return(
        <Box>
            <Typography variant="h3">Sleepyhead privacy policy</Typography>
            <img src={Moonlogo} alt="moon logo" height={100}></img>
            <Typography>
                1. The app does not access, collect, handle or share any user data
                <br />2. The app contains no advertisements
                <br />3. The app does not ask for any permissions of the user's device
                <br />4. The app does not try to uniquely identify users
                <br />5. For any questions relating to privacy the contact is shadyshadyshades@hotmail.com
                <br />6. The app does not access, use or process user's personal information made available by Google
                <br />7. The app may have access to analytics through Google Play Console however we do not store this information or use it to try and identify users
                <br />8. We will store customers email addresses collected through users contacting our email address for the sole purpose of answering user queries
                <br />9. The app does not record IP addresses
                <br />10. The app doesn't use any tracking or identifying cookies
                <br />11. We do not expect any government requests for data, however in that circumstance we will only comply if we are legally obliged to do so.
            </Typography>
        </Box>
    )

}

export default SleepyheadPrivacyPolicy;