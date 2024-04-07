"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScratchCards = void 0;
var ScratchCards = /** @class */ (function () {
    function ScratchCards(scratchcards) {
        this.scratchcards = scratchcards;
    }
    ScratchCards.prototype.getScratchcard = function (numberOfScratchCard) {
        if (numberOfScratchCard >= 1 &&
            numberOfScratchCard <= this.scratchcards.length) {
            return this.scratchcards[numberOfScratchCard - 1];
        }
        else {
            throw new Error("Invalid scratch card number");
        }
    };
    return ScratchCards;
}());
exports.ScratchCards = ScratchCards;
