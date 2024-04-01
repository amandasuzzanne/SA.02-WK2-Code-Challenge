function array(num1, num2){
    // Empty array to add numbers
    let arr = []

    // Range of numbers
    let start = Math.min(num1,num2)
    let end = Math.max(num1,num2)

    for (let idx=start; idx < end; idx++) {

        // Psuh number into the array 
        arr.push(idx)
        
    }
    return arr
}