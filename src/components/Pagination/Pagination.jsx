import React from "react";
import { Container } from "./PaginationElements";
import { Button } from "../Button/Button";

export const Pagination = () => {
  return (
    <Container>
      <Button>Anterior</Button>

      <Button>Siguiente</Button>
    </Container>
  );
};
