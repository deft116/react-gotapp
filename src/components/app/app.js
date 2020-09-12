import React, { useState } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

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
              style={{ margin: "1em auto"}}
            >
              Show Random Character
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <ItemList />
          </Col>
          <Col md="6">
            <CharDetails />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default App;
