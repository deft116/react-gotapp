import React, { useState } from "react";
import { Col, Row, Container, Button } from "reactstrap";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

const CharacterPage = () => {
  const [selectedChar, setSelectedChar] = useState(130);
  const onCharSelected = (id) => {
    setSelectedChar(id);
  };
  return (
    <Row>
      <Col md="6">
        <ItemList onCharSelected={onCharSelected} />
      </Col>
      <Col md="6">
        <CharDetails charId={selectedChar} />
      </Col>
    </Row>
  );
};

export default CharacterPage;
