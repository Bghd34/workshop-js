


villes = ["nantes","paris","saint-nazaire","angers","le mans"];
villes.forEach(ville=>console.log(ville));

//  aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

const test1 = (currentVille) => currentVille.includes("a");
console.log(villes.every(test1));

const test2 = (currentVille) => currentVille.includes("-");
console.log(villes.some(test2));

/*console.log( villes.every(ville => ville.includes("a")) );
console.log( villes.some(ville => ville.includes("-")) );*/
