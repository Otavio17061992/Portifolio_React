import React from "react";
import { Container } from "../SidebarMenu/styles";

const SidebarItem = ({ Icon, Text }) => {
  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  );
};

export default SidebarItem;
