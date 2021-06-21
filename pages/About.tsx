import React, { FC } from "react";
import { Box, VStack } from "@chakra-ui/react";
import AboutComponent from "../components/AboutComponent";

const About: FC = () => {
  return (
    <Box>
      <VStack>
        <AboutComponent
          header="Kort om meg"
          imageUrl="/image/about/martin.jpg"
          body="Jeg studerer informatikk ved NTNU Gløshaugen, på mitt andre år!
           Ved siden av studiene har jeg flere verv, og mange personlige prosjekter!"
        />
      </VStack>
    </Box>
  );
};

export default About;
