type Id = number;

interface Option {
  id: Id;
  title: string;
  description: string;
  cost: number;
  unlock: number[] | null;
  hidden: boolean;
};

type Options = Option[];

interface IndexedOptions {
  [optionId: Id]: Option
}

interface GameStart {
  description: string;
}

/**
 * An Array of Option-Ids that the player picked
 */
type PlayerHistory = Id[];

interface Game {
  start: GameStart;
  options: IndexedOptions;
  history: PlayerHistory;
  score: number;
}

interface ActionWithId {
  type: string;
  optionId: Id;
}