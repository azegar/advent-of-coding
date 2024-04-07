"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.summarizeScores = exports.calculateScore = exports.getMatches = void 0;
/**
 * check matches between winning and mine numbers
 * @param scratchcard Scratchcard object
 * @returns number[]
 */
function getMatches(scratchcard) {
    var winning = scratchcard.winning, mine = scratchcard.mine;
    var matches = [];
    for (var _i = 0, mine_1 = mine; _i < mine_1.length; _i++) {
        var number = mine_1[_i];
        if (winning.includes(number)) {
            matches.push(number);
        }
    }
    return matches;
}
exports.getMatches = getMatches;
/**
 * calculate score on number of matches
 * @param numberOfMatches
 * @returns number
 */
function calculateScore(numberOfMatches) {
    var score = 0;
    for (var i = 0; i < numberOfMatches; i++) {
        score += Math.pow(2, i); // Doubling the points for each match
    }
    return score;
}
exports.calculateScore = calculateScore;
/**
 * Summarize scores for all scratchcards
 * @param scratchcards Array of Scratchcard objects
 * @returns number
 */
function summarizeScores(scratchcards) {
    var totalScore = 0;
    for (var _i = 0, scratchcards_1 = scratchcards; _i < scratchcards_1.length; _i++) {
        var scratchcard = scratchcards_1[_i];
        var matches = getMatches(scratchcard);
        var score = calculateScore(matches.length);
        totalScore += score;
    }
    return totalScore;
}
exports.summarizeScores = summarizeScores;
