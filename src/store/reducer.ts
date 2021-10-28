import * as actionTypes from './actionTypes';

const initialState: Game = {
  "start" : {
    "description": "Ein 64-jähriger Patient kommt wegen zunehmenden schnellen Ermüdbarkeit und Schwindelgefühlen. Auf Nachfrage ist er bisher noch nicht synkopiert. Bei der körperlichen Untersuchung ist der Patient blass, T 37,2°C, AF 22/min, HF 102/min, RR 103/72 mmHg, BMI 19,2 kg/m2, die Sättigung unter RL beträgt 94%. Die Auskultation ergibt keinen pathologischen Befund, bei der Palpation des Abdomens ist die Milz 2 QF unter dem linken Rippenbogen tastbar, die Leber ist 19 cm in der MCL rechts."
  },
  "options": {
    "1": {
      "id": 1,
      "title": "Sozialanamnese",
      "description": "Der Patient ist verheiratet und lebt mit seiner Frau in einem Eigenheim in Frankfurt-Sachsenhausen. Er war Abteilungsleiter einer Import/Exportfirma mit dem Firmensitz an der Hanauer Landstrasse, er ist vor 6 Monaten in den Vorruhestand gegangen. <br/> Die Sozialanamnese/Berufsanamnese kann erfragt werden, ist aber erwartungsgemäß nicht weiterführend.",
      "cost": 50,
      "unlock": null
    },
    "2": {
      "id": 2,
      "title": "Familienanamnese",
      "description": "Der Vater litt seit seinem 55. Jahr an Hypertonie (starker Raucher) und ist mit 82 Jahren an Herzinfarkt gestorben, die Mutter litt an Alzheimer-Demenz und ist mit 81 Jahren an ungeklärten Ursachen gestorben. Er hat einen Onkel, über dessen Gesundheit er nicht Bescheid weiß. Der Patient hat eine 2 Jahre ältere gesunde Schwester und einen 4 Jahre jüngeren Bruder, der Hypertonie und Hypercholesterinämie hat. Seine beiden Kinder (39, 35 Jahre) sind gesund, ebenso wie der jetzt 2-jährige Enkel. In der Familie sind Hypertonie und Herzerkrankungen häufiger vertreten.",
      "cost": 50,
      "unlock": null
    }
  },
  "history": []
}

const reducer = (state: Game = initialState, action: ActionWithId): Game => {
  switch (action.type) {
    case actionTypes.SELECT_ANAM:
      return {
        ...state,
        history: [...state.history, action.optionId],
      }
    default:
      return state
  }
}

export default reducer;