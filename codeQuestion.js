function removeEven(arr){
    var odds = []
    for(let number of arr){
        if (number % 2 != 0){ //check if the item in the list is NOT even
            odds.push(number) //if it isn't even append it to the  empty list
        }
            
            
    }
    return odds // returns the new list
}

console.log(removeEven([3, 2, 41, 3, 34]))
