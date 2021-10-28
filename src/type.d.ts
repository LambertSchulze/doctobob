type Id = number;

interface Option {
  id: Id;
  title: string;
  description: string;
  cost: number;
  unlock: number[] | null;
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
}

interface ActionWithId {
  type: string;
  optionId: Id;
}