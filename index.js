const snakeCaseToCamelCase = snakeCaseSentence => snakeCaseSentence.replace(/[_]./g, underscoreLetter => underscoreLetter[1].toUpperCase());

const snakedCaseObjectKeysToCamelCase = snakedCaseObject => {    
    const objectKeys = Object.keys(snakedCaseObject).map(key => ({ snakeCaseKey: key, camelCaseKey: snakeCaseToCamelCase(key) }));
    const camelCaseObject = {};

    objectKeys.forEach(keys => {
        const { snakeCaseKey, camelCaseKey } = keys;
        camelCaseObject[camelCaseKey] = snakedCaseObject[snakeCaseKey];
    });

    return camelCaseObject;

}

console.log(snakeCaseToCamelCase("fernando_reis_guimaraes"));
console.log(snakeCaseToCamelCase("select person_name, person_age from people"));
console.log(snakedCaseObjectKeysToCamelCase({ person_name: "fernando_reis_guimaraes_", person_age: 34}));

