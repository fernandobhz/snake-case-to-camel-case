const snakeCaseToCamelCase = (snakeCaseSentence) =>
  snakeCaseSentence
    .split("_")
    .map((wordValue, wordIndex) => {
      if (wordValue === "") return "";

      const lowerCaseWord = wordValue.toLowerCase();
      if (wordIndex === 0) return lowerCaseWord;

      const firstCharCapitalized = lowerCaseWord[0].toUpperCase();
      const secondCharForward = lowerCaseWord.slice(1);
      return `${firstCharCapitalized}${secondCharForward}`;
    })
    .join("");


const snakedCaseObjectKeysToCamelCase = snakedCaseObject => {    
    const objectKeys = Object.keys(snakedCaseObject).map(key => ({ snakeCaseKey: key, camelCaseKey: snakeCaseToCamelCase(key) }));
    const camelCaseObject = {};

    objectKeys.forEach(keys => {
        const { snakeCaseKey, camelCaseKey } = keys;
        camelCaseObject[camelCaseKey] = snakedCaseObject[snakeCaseKey];
    });

    return camelCaseObject;

}

console.log(snakeCaseToCamelCase("fernando_reis_guimaraes_"));
console.log(snakedCaseObjectKeysToCamelCase({ person_name: "fernando_reis_guimaraes_", person_age: 34}));

