//Function to check if a number is palindrome
function isPalindrome(string){
  string = string.toLowerCase();
  var stringArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var cleanedArray = [];
  stringArr.forEach(char => {
    if(validCharacters.indexOf(char) > -1){
      cleanedArray.push(char)
    };
  });

  if(cleanedArray.join() === cleanedArray.reverse().join()) return true;
  else return false;
}

isPalindrome("Race Carr");
