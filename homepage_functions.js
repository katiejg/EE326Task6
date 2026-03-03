// Shrimp Fact Generator
let facts = [
      'Shrimp have some of the most complex visual systems in the animal kingdom. They can see ultraviolet light and have a 360-degre field of vision thanks to their compound eyes.',
      'Shrimp can swim backwards in a tactic called "lobstering" to quickly escape predators.',
      'The heart of a shrimp is located in its head.',
      'The lifespan of a shrimp is typically a year, but can go up to 6.5 years.',
      'There are about 2,000 species of shrimp.',
      'A shrimp’s body is divided into two regions: the cephalothorax (a fused head and thorax) and the abdomen.',
      'A shrimp produces about 500,000 eggs in one spawning.',
      'Although the term "deveining" refers to removing the dark line down the back of the shrimp, that line is actually the shrimp’s digestive tract, not a vein.',
      'Shrimp are invertebrates.',
      'Shrimp are omnivores.'

];

let index = Math.floor(Math.random() * (facts.length));
var chosenFact = facts[index];
document.getElementById("funFact").innerHTML = `Did you know? ${chosenFact}`;