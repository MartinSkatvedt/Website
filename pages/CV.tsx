import React, { FC } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { Box, Heading } from "@chakra-ui/react";
const CV: FC = () => {
  return (
    <Box w="100%" textAlign="center">
      <Heading>CV</Heading>
      <Box marginLeft="auto" marginRight="auto" width="45%">
        <Document loading="Loading PDF" file="/Resume.pdf">
          <Page pageNumber={1} />
        </Document>
      </Box>
    </Box>
  );
};

export default CV;
