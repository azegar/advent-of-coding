"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumDigitsFromArray = exports.filterDigitsArray = exports.filterDigits = void 0;
/**
 * filter digits
 * @param text string
 * @returns string
 */
function filterDigits(text) {
    var digits = text.match(/\d/g);
    if (digits) {
        if (digits.length === 1) {
            return digits[0] + digits[0]; // duplicat the digit
        }
        else {
            return digits[0] + digits[digits.length - 1];
        }
    }
    return "";
}
exports.filterDigits = filterDigits;
/**
 * filter digits from array of strings
 * @param texts string[]
 * @returns string[]
 */
function filterDigitsArray(texts) {
    var filteredArray = [];
    for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
        var text = texts_1[_i];
        var filteredText = filterDigits(text);
        filteredArray.push(filteredText);
    }
    return filteredArray;
}
exports.filterDigitsArray = filterDigitsArray;
/**
 * sum digits from array of strings
 * @param texts
 * @returns
 */
function sumDigitsFromArray(texts) {
    var filteredTexts = filterDigitsArray(texts);
    var sum = 0;
    for (var _i = 0, filteredTexts_1 = filteredTexts; _i < filteredTexts_1.length; _i++) {
        var filteredText = filteredTexts_1[_i];
        var parsedNumber = parseInt(filteredText);
        sum += parsedNumber;
    }
    return sum;
}
exports.sumDigitsFromArray = sumDigitsFromArray;
