import { Scratchcard } from "./definitions";

/**
 * check matches between winning and mine numbers
 * @param scratchcard Scratchcard object
 * @returns number[]
 */
export function getMatches(scratchcard: Scratchcard): number[] {
  const { winning, mine } = scratchcard;
  const matches: number[] = [];
  for (const number of mine) {
    if (winning.includes(number)) {
      matches.push(number);
    }
  }

  return matches;
}

/**
 * calculate score on number of matches
 * @param numberOfMatches
 * @returns number
 */
export function calculateScore(numberOfMatches: number): number {
  if (numberOfMatches === 0) {
    return 0;
  }

  let score = 1; // Initialize score to 1 for the first match
  for (let i = 0; i < numberOfMatches - 1; i++) {
    score *= 2; // Double the score for each match after the first, up to three times
  }
  return score;
}

/**
 * Summarize scores for all scratchcards
 * @param scratchcards Array of Scratchcard objects
 * @returns number
 */
export function summarizeScores(scratchcards: Scratchcard[]): number {
  let totalScore = 0;
  for (const scratchcard of scratchcards) {
    const matches = getMatches(scratchcard);
    const score = calculateScore(matches.length);
    totalScore += score;
  }
  return totalScore;
}

/**
 * build and add array of scratchcard where index represents
 * the scratchcard and numberOfScratchcards represents number of appearances
 * @param scratchcards Scratchcard[]
 * @returns { index: number; numberOfScratchcards: number }[]
 */
export function addScratchcardToArray(scratchcards: Scratchcard[]): {
  index: number;
  numberOfScratchcards: number;
}[] {
  const processedScratchcards: {
    index: number;
    numberOfScratchcards: number;
  }[] = [];

  // calculate matches for all scratchcards and store matchesCount
  const scratchcardMatches: number[] = scratchcards.map((card) => {
    const matches = getMatches(card);
    return matches.length;
  });

  function processScratchcard(index: number, matches: number): void {
    const scratchcard = scratchcards[index];
    if (scratchcard === undefined) {
      return;
    }

    const existingRecord = processedScratchcards.find(
      (record) => record.index === index
    );

    if (existingRecord) {
      processedScratchcards[index].numberOfScratchcards =
        existingRecord.numberOfScratchcards + 1;
    } else {
      processedScratchcards.push({ index, numberOfScratchcards: 1 });
    }

    for (let j = index + 1; j <= index + matches; j++) {
      if (matches === 0) {
        break;
      } else {
        processScratchcard(j, scratchcardMatches[j]);
      }
    }
  }

  for (let i = 0; i < scratchcards.length; i++) {
    processScratchcard(i, scratchcardMatches[i]);
  }

  return processedScratchcards;
}

/**
 * Summarize the total number of scratchcards from processedScratchcards
 * @param processedScratchcards Array of processed scratchcards
 * @returns number
 */
export function summarizeNumberOfScratchcards(
  processedScratchcards: {
    index: number;
    numberOfScratchcards: number;
  }[]
): number {
  let totalNumberOfScratchcards = 0;
  for (const record of processedScratchcards) {
    totalNumberOfScratchcards += record.numberOfScratchcards;
  }
  return totalNumberOfScratchcards;
}
