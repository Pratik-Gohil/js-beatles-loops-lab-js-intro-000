// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}
function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] = `${facts[i]}!!!`
  }
  return facts
}
function iLoveTheBeatles(num) {
  array = []
  for (var i = 0; i < num; i++) {
    array.push('I love the Beatles!')
  }
  return array
}