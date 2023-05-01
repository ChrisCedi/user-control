import React from "react";
import { Container } from "./PaginationElements";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";

export const Pagination = ({ pageState, setPageState }) => {
  const { usersData } = useSelector((state) => state.users);

  return (
    <Container>
      <div className="boxBefore">
        <Button
          onClick={() => {
            setPageState(pageState - 1);
            window.scroll(0, 0);
          }}
          disabled={pageState <= 1 ? true : false}
        >
          Anterior
        </Button>

        <Button
          onClick={() => {
            setPageState(pageState + 1);
            window.scroll(0, 0);
          }}
          disabled={pageState >= usersData.totalPages ? true : false}
        >
          Siguiente
        </Button>
      </div>
      <p>{`${usersData.page}/${usersData.totalPages}`}</p>
    </Container>
  );
};
