import React, { FC } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { Box, Heading, Text, Link } from "@chakra-ui/react";
const CV: FC = () => {
  return (
    <Box w="100%" textAlign="center">
      <Heading>CV</Heading>
      <Text>
        Du kan se den faktiske PDFen{" "}
        <Link color="orange.400" href="/Resume.pdf">
          her
        </Link>
      </Text>

      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Document loading="Loading PDF" file="/Resume.pdf" renderMode="canvas">
          <Page pageNumber={1} />
        </Document>
      </Box>
    </Box>
  );
};

export default CV;
