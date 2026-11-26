function translatePigLatin(str) {
  if (/^[aeiou]/.test(str)) {
    return str + "way";
  }

  const consonantCluster = str.match(/^[^aeiou]+/)[0];

  return str.slice(consonantCluster.length) + consonantCluster + "ay";
}

console.log(translatePigLatin("HAHHAHAHA"));
