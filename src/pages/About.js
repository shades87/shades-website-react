import { Box, Typography, Button, Stack } from "@mui/material";
import Profile from "../assets/images/grad-pic-circle.png"

function About() {
    return(
    <Box>
        <img src={Profile} alt="Daniel in graduation gown" height={200}/>
        <Typography variant="h2">Hello!</Typography>
        <Box style={{width: '70rem'}} justifyContent="center">
        <Typography >
            Meet Daniel! Daniel (BA, BEd, BComp) is a computer scientist with a passion for AI, mobile application development, and the theory behind computer science.
            With a keen eye for detail and a knack for problem-solving, Daniel is well-equipped to tackle complex coding challenges and bring innovative ideas to life.
        </Typography>
        <Typography >
            <br />Throughout their university journey, Daniel has gained valuable experience in various programming languages and tools, including Go, Python, Java, Kotlin, and C.
            Additionally, they have expertise in front-end web development languages and frameworks like Javascript, React, HTML and CSS.
        </Typography>
        <Typography>
            <br />As a dedicated and collaborative team player, Daniel enjoys working with others to bring projects to fruition.
            Their strong communication skills and ability to think outside the box make them an asset to any project.<br />
        </Typography>
        </Box>
        <Box paddingTop={2} display="flex" justifyContent="center" alignItems="center">
            <Stack spacing={2} direction="row" alignItems="center">
                <Button variant="outlined" href="https://www.linkedin.com/in/daniel-mcfadyen-curtin/">linkedin</Button>
                <Button variant="outlined" href="https://www.instagram.com/lazyjazzfox/">instagram</Button>
                <Button variant="outlined" href="https://github.com/shades87">github</Button>
            </Stack>
        </Box>
    </Box>
    );
}

export default About;