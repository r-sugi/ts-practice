class Creature1 {
  breathe() {}
}
class Animal1 extends Creature1 {
  shakeTail() {}
}
class Human1 extends Creature1 {
  greet() {}
}

function action(creature: Animal1 | Human1 | Creature1) {
  const c0 = creature
  c0.breathe()
  if (creature instanceof Animal1) {
    const c1 = creature
    return c1.shakeTail()
  }
  const c2 = creature
  if (creature instanceof Human1) {
    const c3 = creature
    return c3.greet()
  }
  const c4 = creature
  return c4.breathe()
}
