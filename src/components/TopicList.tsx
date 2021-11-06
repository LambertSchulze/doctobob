import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAnam } from '../store/actionCreators';

import {
  ListGroup
} from 'react-bootstrap';

const TopicList: React.FC = () => {
  const options: IndexedOptions = useSelector((state: Game) => state.options);
  const history = useSelector((state: Game) => state.history);
  const dispatch = useDispatch();

  const selectOption = (id: Id) => {
    dispatch(selectAnam(id))
  }

  return (
    <ListGroup>
      {Object.values(options).filter((option: Option) => !option.hidden).map((option: Option) => {
        return (
          option?.title ?
            <ListGroup.Item
              key={option.id}
              action
              disabled={history.includes(option.id)}
              onClick={() => selectOption(option.id)}
            >
              {option.title}
            </ListGroup.Item>
            : null
      )})}
    </ListGroup>
  )
}

export default TopicList;