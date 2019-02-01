import React, { Component } from "react";
import Board from "../Components/Board";

import layout from "../css/layout.css";
import { Container, Row, Col } from "reactstrap";

class Game extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="title">
            <div class="title-text">John Conway's Game of Life</div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="game">
              <div className="game-board">
                <Board />
              </div>
            </div>
          </Col>
          <Col />
        </Row>
        <Row>
          <Col />
        </Row>
      </Container>
    );
  }
}

export default Game;
