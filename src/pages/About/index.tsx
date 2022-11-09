import {
  Box,
  Grid,
  Text,
  Flex,
  Heading,
} from "@chakra-ui/react"

const About = (props:any) => {
  return (
    <Grid
      flexDirection="column"
      justifyContent="center"
      minH="100vh"
      overflow="hidden"
      p={3}
    >
      <Flex
        pt="2rem"
        paddingX="10vw"
        direction="row"
        justify="center"
        align="stretch"
        wrap="wrap"
      >
        <Flex m="1rem" direction="column">
          <Box textAlign="left" width="min(80%, 720px)">
            <Heading>
              About Me
            </Heading>
            <Text
              align='left'
            >
              Hi, I'm Joshen. I'm a musician of {new Date().getFullYear()-2010} years, a freelance
              graphic designer, and currently a student at the National University of Singapore.
              I made this website to practise full-stack web development,
              and to simultaneously share my passion in music with others.
              <br></br><br></br>
              This is my first ever web development project, so I appreciate your time
              to give feedback or even contribute to the source code. If you are here to
              interact with the gallery, have fun and really spend the time to reflect on
              what you hear in the music!
            </Text>
          </Box>
        </Flex>
      </Flex>
    </Grid>
  )
}

export default About