const config = {
  mysteryNumber: [1, 100],
  maxAttempts: 10,
  attempt: [],
};

//générer le numéro mystère grâce au mysteryNumber

const mysterynumber = generateNumber();

//selon le nombre d'essais maxAttempts

for (let index = 0; index < config.maxAttempts; index++) {
  const attemptsnumber = generateNumber();
  config.attempt.push(attemptsnumber);
}
console.log(config.attempt);
//on va comparer pour chaque attempts avec le numéro mystère, si gagnant ou si plus ou moins

config.attempt.forEach((number, index) => {
  if (number < mysterynumber) {
    console.log("C'est plus !");
  }
  if (number > mysterynumber) {
    console.log("C'est moins !");
  }
  if (number === mysterynumber) {
    console.log("Ouai ouai ouai c'est gagné !");
    console.log("Numéro mystère : " + mysterynumber);
    console.log(`Vous avez gagné en  ${index + 1}  d'essais`);
  }
});

//si on gagne cela affiche le nombre d'essais et le nombre mystère

//fonction

function generateNumber() {
  const mysterynumber =
    Math.floor(
      Math.random() * (config.mysteryNumber[1] - config.mysteryNumber[0] + 1)
    ) + config.mysteryNumber[0];
  return mysterynumber;
}
