import { Scratchcard } from "./definitions";

export class ScratchCards {
  scratchcards: Scratchcard[];
  constructor(scratchcards: Scratchcard[]) {
    this.scratchcards = scratchcards;
  }

  getScratchcard(numberOfScratchCard: number): {
    winning: number[];
    mine: number[];
  } {
    if (
      numberOfScratchCard >= 1 &&
      numberOfScratchCard <= this.scratchcards.length
    ) {
      return this.scratchcards[numberOfScratchCard - 1];
    } else {
      throw new Error("Invalid scratch card number");
    }
  }
}
