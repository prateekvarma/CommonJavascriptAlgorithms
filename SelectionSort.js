function findLargestNumber(list){
  let large = list[0]
  let indexOfLarge = 0

  for(let i=1 ; i<=list.length ; i++){
    if (large < list[i]){
      large = list[i]
      indexOfLarge = i
    }
  }
  return indexOfLarge
}

function selectionSort(list){
  let newList = []
  let lrgItem
  while(list.length){
    lrgItem = findLargestNumber(list)
    newList.push(list[lrgItem])
    list.splice(lrgItem, 1)
  }
  return newList
}

console.log(selectionSort([12,34,567,2,23,67,11]))
