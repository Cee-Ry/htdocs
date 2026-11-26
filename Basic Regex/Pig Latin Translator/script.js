function translatePigLatin(str) {
  // Check if the word starts with a vowel
  if (/^[aeiou]/.test(str)) {
    return str + "way";
  }

  // Match the leading consonant cluster (all non-vowel characters at the start)
  const consonantCluster = str.match(/^[^aeiou]+/)[0];

  // Move the consonant cluster to the end and append "ay"
  return str.slice(consonantCluster.length) + consonantCluster + "ay";
}

console.log(translatePigLatin("HAHHAHAHA"));
