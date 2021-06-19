import React, { FC } from "react";
import { Text, Heading, Image, Grid, GridItem, Box } from "@chakra-ui/react";

type AboutProps = {
  header: string;
  imageUrl?: string;
  body: string;
};
const AboutComponent: FC<AboutProps> = ({
  header,
  imageUrl,
  body,
}: AboutProps) => {
  return (
    <Box w="60%">
      <Grid
        templateColumns={["1fr", "1fr 2fr"]}
        templateRows={["2fr 0.5fr 2fr", "repeat(3, 1fr)"]}
      >
        {imageUrl ? (
          <GridItem rowSpan={[1, 3]} gridColumn={1}>
            <Image src={imageUrl} alt="About picture" w="100%" />
          </GridItem>
        ) : null}

        <Heading gridColumn={[1, 2]} gridRow={[2, 1]} margin="10px">
          {header}
        </Heading>

        <Text gridColumn={[1, 2]} gridRow={[3, 2]} margin="10px">
          {body}
        </Text>
      </Grid>
    </Box>
  );
};

export default AboutComponent;
