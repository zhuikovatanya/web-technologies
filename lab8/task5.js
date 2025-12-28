function findMaxCommonPart(words) {
  if (words.length === 0) {
    return "";
  }

  const baseWord = words[0];
  let maxCommonPart = "";

  for (let startIndex = 0; startIndex < baseWord.length; startIndex++) {
    for (let endIndex = startIndex + 2; endIndex <= baseWord.length; endIndex++) {
      const part = baseWord.slice(startIndex, endIndex);
      let isCommon = true;

      for (let i = 1; i < words.length; i++) {
        const currentWord = words[i].toLowerCase();
        if (!currentWord.includes(part.toLowerCase())) {
          isCommon = false;
          break;
        }
      }

      if (isCommon && part.length > maxCommonPart.length) {
        maxCommonPart = part;
      }
    }
  }

  return maxCommonPart;
}

console.log(findMaxCommonPart(["цветок", "поток", "хлопок"]));
console.log(findMaxCommonPart(["собака", "гоночная маашина", "машина"]));