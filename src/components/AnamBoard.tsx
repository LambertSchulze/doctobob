import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Container,
  Button,
  Card,
  Fade,
} from 'react-bootstrap';

const AnamBoard: React.FC = () => {
  const [showHistory, setShowHistory] = useState(false);
  const playerHistory = useSelector((state: Game) => state.history);
  const options = useSelector((state: Game) => state.options);

  const lastInHistory: number = playerHistory[playerHistory.length - 1];
  const currentOption = options[lastInHistory];
  // reverse() is destructive! changes original Array
  const reversedHistory = playerHistory.reverse();

  const showHistoryClicked = () => {
    setShowHistory(previous => !previous);
  };

  return (
    <Container style={{overflowY: 'auto', maxHeight: '80vh'}}>
      <Button
        variant="secondary"
        disabled={playerHistory.length <= 1}
        onClick={showHistoryClicked}
      >Show previous Cards</Button>

      {showHistory ?
        reversedHistory.map(id => {
          return (
            <Fade key={id} className="mb-3" in appear>
              <div>
                <Card>
                  <Card.Body>
                    <Card.Title>
                      {options[id]?.title}
                    </Card.Title>
                    <Card.Text>
                      {options[id].description}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Fade>
          )}) :
        <Fade className="mb-3" in appear>
          <div>
            <Card>
              <Card.Body>
                <Card.Title>{currentOption?.title}</Card.Title>
                <Card.Text>{currentOption.description}</Card.Text>
              </Card.Body>
            </Card>
            {currentOption.cost &&
              <small className="position-relative end-0">
                {(currentOption.cost > 0) ? "-" : "+"}{currentOption?.cost.toString().replace('-', '')} Punkte
              </small>
            }
          </div>
        </Fade>
      }
    </Container>
  );
};

export default AnamBoard;