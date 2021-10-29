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
      "unlock": null,
      "hidden": false
    },
    "2": {
      "id": 2,
      "title": "Familienanamnese",
      "description": "Der Vater litt seit seinem 55. Jahr an Hypertonie (starker Raucher) und ist mit 82 Jahren an Herzinfarkt gestorben, die Mutter litt an Alzheimer-Demenz und ist mit 81 Jahren an ungeklärten Ursachen gestorben. Er hat einen Onkel, über dessen Gesundheit er nicht Bescheid weiß. Der Patient hat eine 2 Jahre ältere gesunde Schwester und einen 4 Jahre jüngeren Bruder, der Hypertonie und Hypercholesterinämie hat. Seine beiden Kinder (39, 35 Jahre) sind gesund, ebenso wie der jetzt 2-jährige Enkel. In der Familie sind Hypertonie und Herzerkrankungen häufiger vertreten.",
      "cost": 50,
      "unlock": null,
      "hidden": false
    },
    "3": {
      "id": 3,
      "title": "Neurologische klinische Untersuchung",
      "description": "Der Patient ist orientiert, MME 26 Punkte. Kein Hinweis auf Verlangsamung, kein Hinweis auf zentrale fokale Prozesse. Alle Reflexe seitengleich mittellebhaft.",
      "cost": 80,
      "unlock": [4, 5],
      "hidden": false
    },
    "4": {
      "id": 4,
      "title": "Kleines Blutbild",
      "description": "Hb 8,6 g/dL (12.5 – 16.5 g/dL) Thrombozyten 24_000/μl (150 000 – 400 000) Leukozyten 1 279 000/μl (4 500 – 11 000)",
      "cost": 20,
      "unlock": null,
      "hidden": true
    },
    "5": {
      "id": 5,
      "title": "Großes Blutbild",
      "description": `- Leukozyten 1 279 000/μl (4 500 – 11 000) - Neutrophile Granulozyten: nicht bestimmbar - Stabkernige: nicht bestimmbar - Lymphozyten: 1 250 000/μl - Monozyten: 200/μL - Basophile Granulozyten: 0/μL - Eosinophile Granoluzyten: 0μL`,
      "cost": 20,
      "unlock": null,
      "hidden": true
    }
  },
  "history": [],
  "score": 1000
}

const reducer = (state: Game = initialState, action: ActionWithId): Game => {
  switch (action.type) {
    case actionTypes.SELECT_ANAM:
      return {
        ...state,
        history: [...state.history, action.optionId],
        score: state.score - state.options[action.optionId].cost
      }
    default:
      return state
  }
}

export default reducer;