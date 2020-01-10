import React from "react";
import Posts from "./Posts";
import Container from "@material-ui/core/Container/Container";
import { StoreProvider } from "../store/postStore";

const App = () => {
  return (
    <StoreProvider>
      <Container maxWidth="sm">
        <Posts />
      </Container>
    </StoreProvider>
  );
};

export default App;
