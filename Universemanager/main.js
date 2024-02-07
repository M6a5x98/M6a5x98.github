document.querySelector("form#planet").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
  setTimeout(() => {
    document.querySelector("form").innerHTML =
    "<h3>Universe managing operation has been a success</h3>";
  }, 1000);
});

function calculLife(radio, waterSurface, population, reproRate, rounds) {
  let radioInWater = Math.round(radio/Math.log(waterSurface)) + Math.round(Math.random())
  let populationRestante = population - (radioInWater)
  let Population = populationRestante;
  let creaBorns = []

  for (let i = 0; i < rounds.length; i++) {
    if (Population <= 0) {
      alert('All your creatures are dead !')
      break
    }
    let radioInWater = Math.round(radio/Math.log(waterSurface)) + Math.round(Math.random())
    let reproductionRate = Math.round((Math.random() * (reproRate - 1)) + 1)
    const element = rounds[i];
    // Check for events, kill too old blobs...
    await creaBorns.forEach(blob => {
      if (blob.round === i+3) {
        radioInWater += 1
      }
  })

    console.log(`Population grew of ${reproductionRate} and ${radioInWater} creatures are dead`)
    creaBorns.push({round: i, newBorns: reproductionRate, deads: radioInWater})
    Population -= radioInWater
    Population += reproductionRate
  }
}

/*
let rounds = Array<{
  event: 'population -x' OR 'population +3',
  reproRate?: number
}>
= []
*/