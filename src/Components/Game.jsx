import React, { Component } from "react";
import Board from "../Components/Board";

import layout from "../css/layout.css";
import {
  Container,
  Row,
  Col,
  Media,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink
} from "reactstrap";

class Game extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="title">
            <div class="title-text">John Horton Conway's Game of Life</div>
          </Col>
        </Row>
        <Row style={{ display: "flex" }}>
          <Col>
            <div className="game">
              <div className="game-board">
                <Board />
              </div>
            </div>
          </Col>
          <Col className="game-info-col">
            <h2 className="header">How to play</h2>
            <p>
              Select squares to make a pattern and hit play. Then watch how your
              pattern behaves per the{" "}
              <a href="http://www.conwaylife.com/wiki/Conway%27s_Game_of_Life#Rules">
                {" "}
                rules
              </a>{" "}
              of the game on each iteration.
            </p>
            <Media className="game-info">
              <Media>
                <Media className="heading" heading>
                  Stable patterns
                </Media>
                <Media
                  className="stable-pattern"
                  object
                  src="http://pi.math.cornell.edu/~lipa/mec/sq.png"
                  alt="stable"
                />
                <Media
                  className="stable-pattern-two"
                  object
                  src="http://pi.math.cornell.edu/~lipa/mec/boat.png"
                  alt="stable"
                />
                <Media
                  className="stable-pattern-three"
                  object
                  src="http://pi.math.cornell.edu/~lipa/mec/loaf.png"
                  alt="stable"
                />
                <Media
                  className="stable-pattern-four"
                  object
                  src="http://pi.math.cornell.edu/~lipa/mec/ship.png"
                  alt="stable"
                />
              </Media>
              <Media className="pattern-text" body>
                The above patterns are a small example of 'still lifes'. In
                other words when the cells are either selected like the above,
                or end up like the above after some iterations, from thereon
                they will not change shape despite any number of further
                iterations.{" "}
              </Media>
            </Media>
            <Media className="mt-1">
              <Media>
                <Media className="heading" heading>
                  Oscillators
                </Media>
                <Media
                  className="oscillator-pattern"
                  object
                  src="https://i.imgur.com/bX01Age.png"
                  alt="oscillator pattern"
                />
              </Media>
              <Media className="pattern-text" body>
                Oscillators return to their original pattern after a certain
                number of generations.
              </Media>
            </Media>
            <Media className="mt-1">
              <Media>
                <Media className="heading" heading>
                  Spaceships
                </Media>
                <Media
                  className="pattern"
                  object
                  src="http://pi.math.cornell.edu/~lipa/mec/glider.png"
                  alt="spaceship pattern one"
                />
                <Media
                  className="pattern-two"
                  object
                  src="http://pi.math.cornell.edu/~lipa/mec/lwss.png"
                  alt="spaceship pattern two"
                />
                <Media
                  className="pattern"
                  object
                  src="http://pi.math.cornell.edu/~lipa/mec/f.png"
                  alt="spaceship pattern three"
                />
                <Media
                  className="pattern-three"
                  object
                  src="http://pi.math.cornell.edu/~lipa/mec/meth.png"
                  alt="spaceship pattern four"
                />
                <Media
                  className="pattern-three"
                  object
                  src="http://pi.math.cornell.edu/~lipa/mec/meth.png"
                  alt="spaceship pattern five"
                />
                <Media className="pattern-text" body>
                  Spaceships move and evolve across the grid on each iteration.{" "}
                </Media>
              </Media>
            </Media>
            <Card className="john-conway">
              <CardBody />
              <img
                width="25%"
                src="https://media.wired.com/photos/595481de8e8cc150fa8ec1f3/master/pass/Conway_1k.jpg"
                alt="Card image cap"
              />
              <CardBody>
                <CardText className="pattern-text">More information:</CardText>
                <CardLink
                  className="youtube-video-link"
                  href="https://www.youtube.com/watch?v=R9Plq-D1gEk"
                >
                  Game of Life inception
                </CardLink>
                <CardLink href="https://www.ibiblio.org/lifepatterns/october1970.html">
                  First appearance
                </CardLink>
                <CardLink
                  className="pattern-catalogue"
                  href="https://copy.sh/life/examples/"
                >
                  Pattern catalogue
                </CardLink>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="6" className="footer">
            By Kurtis Angell
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Game;
