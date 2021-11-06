type Id = number;

interface GameStart {
  description: string;
}

interface Option extends GameStart {
  id: Id;
  title?: string;
  cost?: number;
  unlock?: number[] | null;
  hidden?: boolean;
};

type Options = Option[];

interface IndexedOptions {
  [optionId: Id]: Option
}


/**
 * An Array of Option-Ids that the player picked
 */
type PlayerHistory = Id[];

interface Game {
  options: IndexedOptions;
  history: PlayerHistory;
  score: number;
}
