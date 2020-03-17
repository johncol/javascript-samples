function* topSoccerTeams() {
  yield 'Chelsea';
  yield 'Manchester United';
  yield 'Arsenal';
}

for (const team of topSoccerTeams()) {
  console.log(team);
}
// Chelsea
// Manchester United
// Arsenal

const iterator = topSoccerTeams();

console.log(iterator.next()); // { done: false, value: 'Chelsea' }
console.log(iterator.next()); // { done: false, value: 'Manchester United' }
console.log(iterator.next()); // { done: false, value: 'Arsenal' }
console.log(iterator.next()); // { done: true, value: undefined }
