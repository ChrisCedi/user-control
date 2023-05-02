import React from "react";
import { Container } from "./SideBarElements";
import { Images } from "../../assets/Images";
import { Row, Column } from "styled-grid-system-component";

const Sidebar = ({ active, children }) => {
  const closeSidebar = () => {
    active(false);
  };

  return (
    <Container sidebar={active}>
      <Row>
        <Column xs={12}>
          <div className="boxButton">
            <img
              src={Images.closeIcon}
              className="closeIcon"
              alt="closeButton"
              onClick={closeSidebar}
            />
          </div>
        </Column>

        <Column xs={12}>{children}</Column>
      </Row>
    </Container>
  );
};

export default Sidebar;
