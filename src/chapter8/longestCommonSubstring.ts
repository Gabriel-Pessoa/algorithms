function longestCommonSubstring(source: string, target: string) {
    let maxCellValue = 0;
    const table: number[][] = [];

    for (let line = 0; line < source.length; line++) {
        const sourceLetter = source[line];
        const row: number[] = [];

        for (let column = 0; column < target.length; column++) {
            const targetLetter = target[column];

            if (sourceLetter === targetLetter) {
                const topLeftCellValue = (line > 0 && column > 0) ? table[line - 1][column - 1] : 0;
                const cellValue = topLeftCellValue + 1;
                row.push(cellValue);
                maxCellValue = Math.max(cellValue, maxCellValue);
            } else {
                row.push(0);
            }
        }
        table.push(row);
    }
    return maxCellValue;
}

// console.log(longestCommonSubstring('hish', 'fish'));
// console.log(longestCommonSubstring('vista', 'hish'));

const fiWords = [
    "finger",
    "finish",
    "first",
    "fire",
    "field",
    "figure",
    "fight",
    "final",
    "fish",
    "firm"
];

type SuggestionMatch = {
    wordSuggestions: string[]
    maximumSimilarity: number
}

const suggestion: SuggestionMatch = {
    wordSuggestions: [],
    maximumSimilarity: 0,
}

for (const target of fiWords) {
    const currentSimilarity = longestCommonSubstring('hish', target);
    if (currentSimilarity > 2 && currentSimilarity >= suggestion.maximumSimilarity) {
        suggestion.wordSuggestions.push(target);
        suggestion.maximumSimilarity = currentSimilarity
    }
}

console.log(suggestion)
