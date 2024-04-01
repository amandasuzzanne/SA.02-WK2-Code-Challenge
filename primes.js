function prime(num){
    // Excluding 1,2,3 and negative numbers
    if (num<=1) return false;
    if (num<=3) return true;

    // Incase the mumber itself is divisible by 2 or 3, since that is not prime.
    if (num%2===0 || num%3===0) return false;

    // Determining prime number
    for (let i = 5; i*i <=num; i+=6) {
        if (num%i ===0 || num%(i+2)===0){ return false;
        }
    }
    return true;
}
function filterPrime([numbers]){
    return numbers.filter(prime)
}