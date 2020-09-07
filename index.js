function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = []
  for (let i = 0; i < musicians.length; i++){
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatlesPlay
}
