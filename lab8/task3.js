function spinWords(string) {
  const wordsArray = string.split(' ');
  const processedWords = [];

  for (let i = 0; i < wordsArray.length; i++) {
    const currentWord = wordsArray[i];
    
    if (currentWord.length >= 5) {
      const reversedWord = currentWord.split('').reverse().join('');
      processedWords.push(reversedWord);
    } else {
      processedWords.push(currentWord);
    }
  }

  return processedWords.join(' ');
}

const result1 = spinWords("Привет от Legacy");
console.log(result1); // тевирП от ycageL

const result2 = spinWords("This is a test");
console.log(result2); // This is a test