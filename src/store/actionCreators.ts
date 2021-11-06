import * as actionTypes from "./actionTypes"

export const selectAnam = (id: Id) => {
  const action = {
    type: actionTypes.SELECT_ANAM,
    optionId: id
  }
  return action
}

export const changeScoreBy = (points: number) => {
  const action = {
    type: actionTypes.CHANGE_POINTS,
    points
  }
  return action
}