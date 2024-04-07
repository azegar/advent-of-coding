import { Scratchcard } from "../src/definitions";
import { ScratchCards } from "../src/ScratchCards";
import {
  getMatches,
  calculateScore,
  summarizeScores,
  addScratchcardToArray,
  summarizeNumberOfScratchcards,
} from "../src/functions";
import { getData } from "../src/data";
import "jest-extended";

const sccratchcardsReal = getData();

// only for test - regarding Page 1 description
const scratchcardsTestData: Scratchcard[] = [
  { winning: [41, 48, 83, 86, 17], mine: [83, 86, 6, 31, 17, 9, 48, 53] },
  { winning: [13, 32, 20, 16, 61], mine: [61, 30, 68, 82, 17, 32, 24, 19] },
  { winning: [1, 21, 53, 59, 44], mine: [69, 82, 63, 72, 16, 21, 14, 1] },
  { winning: [41, 92, 73, 84, 69], mine: [59, 84, 76, 51, 58, 5, 54, 83] },
  { winning: [87, 83, 26, 28, 32], mine: [88, 30, 70, 12, 93, 22, 82, 36] },
  { winning: [31, 18, 13, 56, 72], mine: [74, 77, 10, 23, 35, 67, 36, 11] },
];

const scratchCardsPile = new ScratchCards(scratchcardsTestData);

const processedScratchcards = addScratchcardToArray(scratchcardsTestData);
// test data summary
const summaryOfAllScratchcardsTest = summarizeNumberOfScratchcards(
  processedScratchcards
);

// process Real data
const processedScratchcardsReal = addScratchcardToArray(sccratchcardsReal);

// // real data summary
const summaryOfAllScratchcardsReal = summarizeNumberOfScratchcards(
  processedScratchcardsReal
);

describe("test getMatches", () => {
  const scratchCards = scratchCardsPile.getScratchcard(1);

  it("should return [48, 83, 86, 17] for card 1 with five winning numbers", () => {
    expect(getMatches(scratchCardsPile.getScratchcard(1)).sort()).toEqual(
      [48, 83, 86, 17].sort()
    );
  });

  it("should return [32, 61] for card 2 with two winning numbers", () => {
    expect(getMatches(scratchCardsPile.getScratchcard(2)).sort()).toEqual(
      [32, 61].sort()
    );
  });

  it("should return [1, 21] for card 3 with two winning numbers", () => {
    expect(getMatches(scratchCardsPile.getScratchcard(3)).sort()).toEqual(
      [1, 21].sort()
    );
  });

  it("should return [84] for card 4 with one winning number", () => {
    expect(getMatches(scratchCardsPile.getScratchcard(4))).toStrictEqual([84]);
  });

  it("should return [] for card 5 with no winning numbers", () => {
    expect(getMatches(scratchCardsPile.getScratchcard(5))).toStrictEqual([]);
  });

  it("should return [] for card 6 with no winning numbers", () => {
    expect(getMatches(scratchCardsPile.getScratchcard(6))).toStrictEqual([]);
  });
});

describe("test calculateScore", () => {
  it("should return 1 score for 1 match", () => {
    const matches = 1;
    const expectedScore = 1;
    const score = calculateScore(matches);
    expect(score).toEqual(expectedScore);
  });

  it("should return 2 scores for 2 matches", () => {
    const matches = 2;
    const expectedScore = 2;
    const score = calculateScore(matches);
    expect(score).toEqual(expectedScore);
  });

  it("should return 4 scores for 3 matches", () => {
    const matches = 3;
    const expectedScore = 4;
    const score = calculateScore(matches);
    expect(score).toEqual(expectedScore);
  });

  it("should return 8 scores for 4 matches", () => {
    const matches = 4;
    const expectedScore = 8;
    const score = calculateScore(matches);
    expect(score).toEqual(expectedScore);
  });
});

describe("test summarizeScores", () => {
  it("should return 13 for the scratchcards object", () => {
    const score = summarizeScores(scratchcardsTestData);
    expect(score).toEqual(13);
  });

  it("should return 27845 for the Real data scratchcards ", () => {
    const scoreReal = summarizeScores(sccratchcardsReal);
    expect(scoreReal).toEqual(27845);
  });
});

describe("test addScratchcardToArray", () => {
  it("should return 1 Card 1 and 2 Cards 2 ", () => {
    const scratchcards: Scratchcard[] = [
      { winning: [1, 2, 3], mine: [2, 3, 6] },
      { winning: [7, 8, 9], mine: [10, 11, 12] },
    ];

    const result = addScratchcardToArray(scratchcards);

    expect(result).toEqual([
      { index: 0, numberOfScratchcards: 1 },
      { index: 1, numberOfScratchcards: 2 },
    ]);
  });

  it("should return Card1: 1, Card2: 2, Card3: 4, Card4: 8, Card5: 14, Card6: 1", () => {
    expect(processedScratchcards).toEqual([
      { index: 0, numberOfScratchcards: 1 },
      { index: 1, numberOfScratchcards: 2 },
      { index: 2, numberOfScratchcards: 4 },
      { index: 3, numberOfScratchcards: 8 },
      { index: 4, numberOfScratchcards: 14 },
      { index: 5, numberOfScratchcards: 1 },
    ]);
  });

  it("should return empty array ", () => {
    const scratchcards: Scratchcard[] = [];
    const result = addScratchcardToArray(scratchcards);
    expect(result).toEqual([]);
  });
});

describe("test summarizeNumberOfScratchcards", () => {
  it("should return 30 for an array of test scratchcards", () => {
    const summary = summarizeNumberOfScratchcards(processedScratchcards);

    expect(summary).toEqual(30);
  });

  it("should return an empty array if no scratchcards are provided", () => {
    const scratchcards: Scratchcard[] = [];
    const result = addScratchcardToArray(scratchcards);

    const summary = summarizeNumberOfScratchcards(result);

    expect(summary).toEqual(0);
  });

  it("should return 9496801 for an array of real scratchcards", () => {
    expect(summaryOfAllScratchcardsReal).toEqual(9496801);
  });
});
