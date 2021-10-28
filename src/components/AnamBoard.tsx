import React from 'react';
import { useSelector } from 'react-redux';

import { Card } from 'react-bootstrap';

const AnamBoard: React.FC = () => {
  const start = useSelector((state: Game) => state.start);
  const playerHistory = useSelector((state: Game) => state.history);
  const options = useSelector((state: Game) => state.options);

  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
            {start.description}
          </Card.Text>
        </Card.Body>
      </Card>

      {playerHistory.map(id => {
        return (
          <Card key={id}>
            <Card.Body>
              <Card.Title>
                {options[id].title}
              </Card.Title>
              <Card.Text>
                {options[id].description}
              </Card.Text>
            </Card.Body>
          </Card>
        )})}
    </>
  )
}

export default AnamBoard;