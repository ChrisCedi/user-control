import React from "react";
import { Container, Content } from "./SideBarElements";
import { Images } from "../../assets/Images";

const Sidebar = ({ active }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <div className="boxButton">
        <img
          src={Images.closeIcon}
          className="closeIcon"
          alt="closeButton"
          onClick={closeSidebar}
        />
      </div>
      <Content>homa</Content>
    </Container>
  );
};

export default Sidebar;
