import React from 'react';
import { useSelector } from 'react-redux';

import { Card, Fade, Container } from 'react-bootstrap';

const AnamBoard: React.FC = () => {
  const start = useSelector((state: Game) => state.start);
  const playerHistory = useSelector((state: Game) => state.history);
  const options = useSelector((state: Game) => state.options);

  return (
    <Container style={{overflowY: 'auto', maxHeight: '80vh'}}>
      <Fade className="mb-3" in appear>
        <Card>
          <Card.Body>
            <Card.Text>
              {start.description}
            </Card.Text>
          </Card.Body>
        </Card>
      </Fade>

      {playerHistory.map(id => {
        return (
          <Fade key={id} className="mb-3" in appear>
            <div>
              <Card>
                <Card.Body>
                  <Card.Title>
                    {options[id].title}
                  </Card.Title>
                  <Card.Text>
                    {options[id].description}
                  </Card.Text>
                </Card.Body>
              </Card>
              <small className="position-relative end-0">{(options[id].cost > 0) ? "-" : "+"}{options[id].cost.toString().replace('-', '')} Punkte</small>
            </div>
          </Fade>
        )})}
    </Container>
  )
}

export default AnamBoard;