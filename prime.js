function isPrime(num){
    if (num < 2) {
        return false;
    }
    
    let i = 2;
    while (i < num) {
        if (num % i === 0) {
            return false;
        }
        i++;
    }
    return true;
}


