import {
  filterDigits,
  filterDigitsArray,
  parseWordsToDigits,
  sumDigitsFromArray,
} from "../src/app";
import { data } from "../src/data";

// Example usage - test 1
const wordsArray = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
];

// Example usage - test 2
const wordsArray2 = [
  "two1nine",
  "eightwothree",
  "abcone2threexyz",
  "xtwone3four",
  "4nineeightseven2",
  "zoneight234",
  "7pqrstsixteen",
  "2eightsevenonenine", //  29
  "fdkbn4lhcfqcdjbfiveeight6", // 46
  "six11eightoneightklv", // 68
  "sixfour7oneights", // 68
];

// convert words to digits for test 1
const digitsArray = parseWordsToDigits(wordsArray);

// convert words to digits for test 2
const digitsArray2 = parseWordsToDigits(wordsArray2);

// convert data (real data) to digits
const digitsHiddenInDataArray = parseWordsToDigits(data);

describe("filterDigits function", () => {
  it("should return '12' for input '1abc2'", () => {
    expect(filterDigits("1abc2")).toBe("12");
  });

  it("should return '38' for input 'pqr3stu8vwx'", () => {
    expect(filterDigits("pqr3stu8vwx")).toBe("38");
  });

  it("should return '15' for input 'a1b2c3d4e5f'", () => {
    expect(filterDigits("a1b2c3d4e5f")).toBe("15");
  });

  it("should return '77' for input 'treb7uchet'", () => {
    expect(filterDigits("treb7uchet")).toBe("77");
  });

  it("should return '11' for input 'a1amakota'", () => {
    expect(filterDigits("a1amakota")).toBe("11");
  });

  it("should return '' for input 'nonumberhere'", () => {
    expect(filterDigits("nonumberhere")).toBe("");
  });

  it("should return '' for input 'zero0here0'", () => {
    expect(filterDigits("zero0here0")).toBe("00");
  });
});

describe("filterDigitsArray function", () => {
  it("should return ['12', '38', '15', '77', '0'] for input ['1abc2', 'pqr3stu8vwx', 'a1b2c3d4e5f', 'treb7uchet', 'zero0here0']", () => {
    expect(
      filterDigitsArray([
        "1abc2",
        "pqr3stu8vwx",
        "a1b2c3d4e5f",
        "treb7uchet",
        "zero0here0",
      ])
    ).toEqual(["12", "38", "15", "77", "00"]);
  });
});

describe("parseWordsToDigits function", () => {
  it("should return [29, 83, 13, 24, 42, 14, 76] for input wordsArray Array", () => {
    expect(parseWordsToDigits(wordsArray)).toEqual([
      29, 83, 13, 24, 42, 14, 76,
    ]);
  });

  it("should return [0, 0] for input ['zero0', 'zero0']", () => {
    expect(parseWordsToDigits(["zero0", "zero0"])).toEqual([]);
  });
});

describe("sumDigitsFromArray function", () => {
  it("should return the sum of digits from the data array", () => {
    expect(sumDigitsFromArray(data)).toBe(55172);
  });

  it("should return the sum of digits from the data array1 - test 1", () => {
    expect(sumDigitsFromArray(digitsArray)).toBe(281);
  });

  it("should return the sum of digits from the data array2 - test 2", () => {
    expect(sumDigitsFromArray(digitsArray2)).toBe(492);
  });

  it("should return the sum of digits from the data array (misspelled)", () => {
    expect(sumDigitsFromArray(digitsHiddenInDataArray)).toBe(54925);
  });
});
