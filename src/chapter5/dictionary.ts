/**
 * The Map object provides a more robust and flexible way to handle dictionaries.
 */
const dictionary = new Map<string, number>();

// Adding key-value pairs
dictionary.set('apple', 7.78);
dictionary.set('banana', 8.99);
dictionary.set('cherry', 17.05);

// Accessing values
console.log(dictionary.get('banana')); // Output: 8.99

// Checking if a key exists
console.log(dictionary.has('apple')); // Output: true

// Deleting a key-value pair
dictionary.delete('banana');

console.log(dictionary); // Output: Map(2) { 'apple' => 7.78, 'cherry' => 17.05 }

// Iterating over the map
dictionary.forEach((value, key) => {
    console.log(key, value);
});
// Output:
// apple 7.78
// cherry 17.05
