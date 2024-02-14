import { Box, Typography, Button } from "@mui/material";
import phone from "../assets/images/sleepyheadappphone.png"

function SleepyheadApp() {
    return(

        <Box>
            <img src={phone} alt="Phone with app displayed" height={300}/>
            <Typography variant="h3">
                Use white noise to help you sleep
            </Typography>
            <Typography variant="body1">
                White noise is a type of sound that contains a blend of frequencies that span the audible range.
                It is commonly used to help people fall asleep and stay asleep, and there are several benefits of using white noise for this purpose, including:

                Blocks out distracting noises: White noise can help block out distracting noises from the environment, such as traffic or noisy neighbors, which can make it easier for someone to fall asleep and stay asleep.

                Promotes relaxation: The consistent and soothing sound of white noise can promote relaxation, which can help reduce stress and anxiety and improve the quality of sleep.

                Creates a familiar environment: White noise can create a familiar environment, similar to the sound of being in the womb, which can be comforting and calming for some people.

                Reduces sensitivity to other sounds: By masking other sounds, white noise can reduce sensitivity to other sounds that might otherwise wake someone up during the night, such as a dog barking or a door slamming.

                Improves sleep quality: Studies have shown that using white noise can improve the quality of sleep by reducing the number of times someone wakes up during the night and increasing the amount of time spent in deep sleep.
            </Typography>
                <Button href="https://play.google.com/store/apps/details?id=edu.curtin.sleepyhead">App on Google Play </Button>
                <Button href="https://www.instagram.com/dwellerdoesart">UI icons by @dwellerdoesart</Button>
                <Button href="https://github.com/shades87/Sleepyhead">Github</Button>
                <Button href="sleepyhead-privacy-policy.html">Privacy policy </Button>
        </Box>
    );
}

export default SleepyheadApp;