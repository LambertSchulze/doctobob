import { AnyAction } from 'redux';
import * as actionTypes from './actionTypes';

const initialState: Game = {
  "options": {
    "0": {
      "id": 0,
      "description": "Ein 64-jähriger Patient kommt wegen zunehmenden schnellen Ermüdbarkeit und Schwindelgefühlen. Auf Nachfrage ist er bisher noch nicht synkopiert. Bei der körperlichen Untersuchung ist der Patient blass, T 37,2°C, AF 22/min, HF 102/min, RR 103/72 mmHg, BMI 19,2 kg/m2, die Sättigung unter RL beträgt 94%. Die Auskultation ergibt keinen pathologischen Befund, bei der Palpation des Abdomens ist die Milz 2 QF unter dem linken Rippenbogen tastbar, die Leber ist 19 cm in der MCL rechts.",
    },
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
      "title": "Sexualanamnese",
      "description": "Unauffällig",
      "cost": 50,
      "unlock": null,
      "hidden": false
    },
    "4": {
      "id": 4,
      "title": "Neurologische klinische Untersuchung",
      "description": "Der Patient ist orientiert, MME 26 Punkte. Kein Hinweis auf Verlangsamung, kein Hinweis auf zentrale fokale Prozesse. Alle Reflexe seitengleich mittellebhaft.",
      "cost": 80,
      "unlock": [6, 7],
      "hidden": false
    },
    "5": {
      "id": 5,
      "title": "Psychosomatische klinische Untersuchung",
      "description": "Kein Hinweis auf Depression.",
      "cost": 80,
      "unlock": null,
      "hidden": false
    },
    "6": {
      "id": 6,
      "title": "Kleines Blutbild",
      "description": "Hb 8,6 g/dL (12.5 – 16.5 g/dL) Thrombozyten 24_000/μl (150 000 – 400 000) Leukozyten 1 279 000/μl (4 500 – 11 000)",
      "cost": 20,
      "unlock": [12],
      "hidden": true
    },
    "7": {
      "id": 7,
      "title": "Großes Blutbild",
      "description": `- Leukozyten 1 279 000/μl (4 500 – 11 000) - Neutrophile Granulozyten: nicht bestimmbar - Stabkernige: nicht bestimmbar - Lymphozyten: 1 250 000/μl - Monozyten: 200/μL - Basophile Granulozyten: 0/μL - Eosinophile Granoluzyten: 0μL`,
      "cost": 20,
      "unlock": [13],
      "hidden": true
    },
    "8": {
      "id": 8,
      "title": "Elektrolyte",
      "description": "Na 141 mmol/L K 4,1 mmol/L Mg 0,95 mmol/L Ca 2,51 mmol/L Chlorid 108 mmol/L",
      "cost": 20,
      "unlock": null,
      "hidden": false
    },
    "9": {
      "id": 9,
      "title": "Blutzucker",
      "description": "Nüchtern: 65 mg/dL",
      "cost": 20,
      "unlock": null,
      "hidden": false
    },
    "10": {
      "id": 10,
      "title": "Blutausstrich",
      "description": "Verminderte Erythrozyten, mit Kugelzellen und Stachelzellen. Keine Thrombozyten erkennbar. Sehr viele unreife Lymphozyten mit teils fleckigen, vergrößerten Kernen und Zytoplasma- Ausstülpungen. Keine Granulozyten erkennbar.",
      "cost": 40,
      "unlock": [13],
      "hidden": false
    },
    "11": {
      "id": 11,
      "title": "Durchflusszytometrie",
      "description": "99% CD3+, CD4+, CD8+-Lymphozyten, vereinbar mit einer T-Zell-promyelozytären Form.",
      "cost": 150,
      "unlock": [13],
      "hidden": false
    },
    "12": {
      "id": 12,
      "title": "Karyogramm der Lymphomzellen",
      "description": "Alle Zellen haben den Karyotyp 46 XY inv14(q11.2q32), mit einem Rearrangement des T-Zell-Rezeptors.",
      "cost": 150,
      "unlock": [13],
      "hidden": true
    },
    "13": {
      "id": 13,
      "title": "Diagnose",
      "description": "T-CLL, T-Zell-Lymphom, T-Zell-Leukämie, T-Zell-Prolymphozytäre Leukämie",
      "cost": -500,
      "unlock": null,
      "hidden": true,
    }
  },
  "history": [0],
  "score": 0
}

const reducer = (state: Game = initialState, action: AnyAction): Game => {
  switch (action.type) {
    case actionTypes.SELECT_ANAM:
      let indexedUnlockedOptions = {};
      const unlockedOptionIds = state.options[action.optionId].unlock;

      if (unlockedOptionIds) {
        const unlockedOptions: Options = unlockedOptionIds?.map(id => {
          return {
            ...state.options[id],
            hidden: false
          }
        })

        indexedUnlockedOptions = unlockedOptions?.reduce(
          (pre, cur) => ({
            ...pre,
            [cur.id]: cur,
          }), {}
        )
      }

      return {
        ...state,
        options: {
          ...state.options,
          ...indexedUnlockedOptions
        },
        history: [...state.history, action.optionId],
        score: state.score - (state.options[action.optionId].cost ?? 0)
      }
    case actionTypes.CHANGE_POINTS:
      return {
        ...state,
        score: state.score - action.points
      }
    default:
      return state
  }
}

export default reducer;