function reverseArray(arr){
  // we divide the arr.length by 2, because only half of the array is needed to reverse. If the entire length is run, it will reverse it back
  for(var i = 0 ; i < arr.length / 2 ; i++){
    var currentNode = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = currentNode;
  }
  return arr;
}

reverseArray([1,2,3,4,5,6]);
