import React from 'react';
import { useSelector } from 'react-redux';

import { Badge } from 'react-bootstrap';

const Score: React.FC = () => {
  const score = useSelector((state: Game) => state.score);

  return (
    <Badge bg="warning" text="dark">
      {score} Punkte
    </Badge>
  )
}

export default Score;