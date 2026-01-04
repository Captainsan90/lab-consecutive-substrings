function consecutiveSubstrings(string) {
  const substrings = [];
  
  // Outer loopdetermines the starting index of the substring
  for (let i = 0; i < string.length; i++) {
    // Inner loop: determines the ending index of the substring
    for (let j = i + 1; j <= string.length; j++) {
      // Extract the substring from index i up to (but not including) j
      substrings.push(string.slice(i, j));
    }
  }

  return substrings;
}

if (require.main === module) {
  // Manual tests
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", consecutiveSubstrings(''));
}

module.exports = consecutiveSubstrings;