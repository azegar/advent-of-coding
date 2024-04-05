import { data } from "./data";

/**
 * filter digits
 * @param text string
 * @returns string
 */
export function filterDigits(text: string): string {
  const digits = text.match(/\d/g);

  if (digits) {
    if (digits.length === 1) {
      return digits[0] + digits[0]; // duplicat the digit
    } else {
      return digits[0] + digits[digits.length - 1];
    }
  }
  return "";
}

/**
 * filter digits from array of strings
 * @param texts string[]
 * @returns string[]
 */
export function filterDigitsArray(texts: string[]): string[] {
  const filteredArray: string[] = [];
  for (const text of texts) {
    const filteredText = filterDigits(text);

    filteredArray.push(filteredText);
  }
  return filteredArray;
}

/**
 * sum digits from array of strings
 * @param texts
 * @returns
 */
export function sumDigitsFromArray(texts: (string | number)[]): number | Error {
  let sum = 0;
  // Check if texts is an array of numbers
  if (texts.every((item) => typeof item === "number")) {
    // sum all numbers
    for (const num of texts as number[]) {
      sum += num;
    }
  } else {
    const filteredTexts = filterDigitsArray(texts as string[]);

    for (const filteredText of filteredTexts) {
      const parsedNumber = parseInt(filteredText);

      sum += parsedNumber;
    }
  }

  return sum;
}

/**
 * build Array of numbers from Word
 * @param wordInput string
 * @returns number[]
 */
function buildDigitArrayFromWords(wordInput: string): number[] {
  const digits = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ]
    .reduce(
      (acc, word, index) => acc.replaceAll(word, word + (index + 1) + word),
      wordInput
    )
    .split("")
    .map(Number)
    .filter(Boolean);

  return digits;
}

/**
 * parseWordsToDigits from texts and transfer them to digits
 * @param texts string[]
 * @returns number[]
 */
export function parseWordsToDigits(words: string[]): number[] {
  const digits: number[] = [];

  for (const word of words) {
    const digitArray = buildDigitArrayFromWords(word);

    if (digitArray.length > 0) {
      if (digitArray.length === 1) {
        digits.push(parseInt(String(digitArray[0]) + String(digitArray[0]))); // duplicat the digit
      } else {
        digits.push(
          parseInt(
            String(digitArray[0]) + String(digitArray[digitArray.length - 1])
          )
        );
      }
    }
  }

  return digits;
}
