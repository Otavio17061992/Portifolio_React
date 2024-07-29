import React from "react";
import { Container, Content } from "./styles";
import {
  FaTimes,
  FaHome,
  FaEnvelope,
  FaRegSun,
  FaUserAlt,
  FaIdCardAlt,
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar,
} from "react-icons/fa";

import SidebarItem from "../SidebarItem";

const Sidebar = ({}) => {
  const closeSidebar = () => {};

  return (
    <Container>
      <FaTimes onClick={closeSidebar} />
      <Content></Content>
    </Container>
  );
};

export default Sidebar;
