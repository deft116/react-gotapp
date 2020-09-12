import React, { Component, useState } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import CharacterPage from "../characterPage/characterPage";
import Header from "../header";
import RandomChar from "../randomChar";

const App = () => {
  const [isRandomCharacter, setRandomCharacter] = useState(true);

  const showRandomCharacter = () => setRandomCharacter(!isRandomCharacter);
  const randomChar = isRandomCharacter ? <RandomChar /> : null;

  return (
    <>
      <Container>
        <Header />
      </Container>
      <Container>
        <Row>
          <Col lg={{ size: 5, offset: 0 }}>
            {randomChar}
            <Button
              color="secondary"
              onClick={showRandomCharacter}
              style={{ margin: "1em auto" }}
            >
              Show Random Character
            </Button>
          </Col>
        </Row>
        <CharacterPage />
      </Container>
    </>
  );
};

export default App;
