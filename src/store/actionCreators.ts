import * as actionTypes from "./actionTypes"

export const selectAnam = (id: Id) => {
  const action = {
    type: actionTypes.SELECT_ANAM,
    optionId: id
  }

  return action
}