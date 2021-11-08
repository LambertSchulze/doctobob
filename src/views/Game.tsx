import React from 'react'
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'
import {
  Score,
  AnamBoard,
  TopicList,
  Solve,
} from '../components'


const Game: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col><h1>Test Anam</h1></Col>
        <Col className="text-end"><Score /></Col>
      </Row>
      <Row>
        <Col><AnamBoard /></Col>
        <Col><TopicList /><Solve /></Col>
      </Row>
    </Container>
  )
}

export default Game