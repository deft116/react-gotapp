import React, { Component, useState } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

const App = () => {
  const [isRandomCharacter, setRandomCharacter] = useState(true);
  const [selectedChar, setSelectedChar] = useState(130);


  const showRandomCharacter = () => setRandomCharacter(!isRandomCharacter);
  const randomChar = isRandomCharacter ? <RandomChar /> : null;

  const onCharSelected = (id) => {
    setSelectedChar(id);
  };


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
        <Row>
          <Col md="6">
            <ItemList onCharSelected={onCharSelected} />
          </Col>
          <Col md="6">
            <CharDetails charId={selectedChar}/>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
