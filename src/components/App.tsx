import React from "react";
import Items from "./Items";
import Container from "@material-ui/core/Container/Container";
import { StoreProvider } from "../store";

const App = () => {
  return (
    <StoreProvider>
      <Container maxWidth="sm">
        <Items />
      </Container>
    </StoreProvider>
  );
};

export default App;
