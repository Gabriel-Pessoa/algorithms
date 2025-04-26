/**
 * Generates a random integer between the given minimum and maximum values (inclusive).
 * 
 * @param {number} min - The minimum value of the range (inclusive).
 * @param {number} max - The maximum value of the range (inclusive).
 * @returns {number} A random integer between min and max.
 */
export function generateRanbomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

