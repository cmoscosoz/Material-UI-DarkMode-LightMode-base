import React from "react";
import { Container } from "@material-ui/core/";

import NavBar from "./Navbar/Navbar";
const Layout = (props) => {
  return (
    <Container>
      <NavBar />
      {props.children}
    </Container>
  );
};

export default Layout;
