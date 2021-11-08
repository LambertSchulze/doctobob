import React, { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { changeScoreBy } from '../store/actionCreators';

import {
  Container,
  Button,
  Card,
  Fade,
} from 'react-bootstrap';

const AnamBoard: React.FC = () => {
  const [showHistory, setShowHistory] = useState(false);
  const [currentOption, setCurrentOption] = useState<Option>();
  const playerHistory = useSelector((state: Game) => state.history);
  const options = useSelector((state: Game) => state.options);
  const dispatch = useDispatch();

  useEffect(() => {
    const lastInHistory = playerHistory[playerHistory.length - 1];
    setCurrentOption(options[lastInHistory]);
  }, [playerHistory, options]);

  const showHistoryClicked = () => {
    if (!showHistory) { // on open
      // it costs 11 Points to show the history
      dispatch(changeScoreBy(11));
    }
    setShowHistory(previous => !previous);
  };

  return (
    <Container style={{overflowY: 'auto', maxHeight: '80vh'}}>
      <Button
        variant="secondary"
        disabled={playerHistory.length <= 1}
        onClick={showHistoryClicked}
        className="mb-2"
      >
        Show previous Cards
      </Button>

      {showHistory ?
        playerHistory.reverse().map(id => {
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
                <Card.Text>{currentOption?.description}</Card.Text>
              </Card.Body>
            </Card>
            {currentOption?.cost &&
              <small className="position-relative end-0">
                {(currentOption?.cost > 0) ? "-" : "+"}{currentOption?.cost.toString().replace('-', '')} Punkte
              </small>
            }
          </div>
        </Fade>
      }
    </Container>
  );
};

export default AnamBoard;