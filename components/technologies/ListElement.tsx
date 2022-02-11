import React, { FC } from "react";
import { ListItem } from "@chakra-ui/react";

const ListElement: FC = ({ children }) => {
  return (
    <ListItem _hover={{ color: "orange.400" }} transition="all 0.1s">
      {children}
    </ListItem>
  );
};

export default ListElement;
