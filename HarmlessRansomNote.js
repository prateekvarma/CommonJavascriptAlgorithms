function harmlessRansomNote(noteText, magazineText){
  var noteArr = noteText.split(' ');
  var magazineArr = magazineText.split(' ');
  var magazineObj = {};

  // if word is not present already, assign it 0, and then increment
  // if the word IS present, simply increment the current value
  magazineArr.forEach(word => {
    if(!magazineObj[word]) magazineObj[word] = 0;
    magazineObj[word]++;
  });

  // if magazineObj contains the word from noteArr, decrement it from magazineObj
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if(magazineObj[word]){
      magazineObj[word]--;
      // at this point, if the noteText matches the word on magazineText, it has to be atleast 0 after decrement
      if(magazineObj[word] < 0) noteIsPossible = false;
    } 
    else noteIsPossible = false
  });
  return noteIsPossible;
}


harmlessRansomNote('hill billy ', 'For a hill men would kill why they do not know');
