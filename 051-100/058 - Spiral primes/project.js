function isPrime3(n) {
    'use strict';
    if (isNaN(n) || !isFinite(n) || n%1 || n<2){ return false;}
    if (n%2===0) {return (n===2);}
    if (n%3===0) {return (n===3);}
    var m=Math.sqrt(n), i;
    for (i=5;i<=m;i+=6) {
        if (n%i===0)     {return false;}
        if (n%(i+2)===0) {return false;}
    }
    return true;
}
function eratosthenes(n) {
    // Eratosthenes algorithm to find all primes under n
    var array = [], upperLimit = Math.sqrt(n), output = [];
    // Make an array from 2 to (n - 1)
    for (var i = 0; i < n; i++) {
        array.push(true);
    }
    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }
    // All array[i] set to true are primes
    for (var i = 2; i < n; i++) {
        if(array[i]) {
            output.push(i);
        }
    }
    return output;
}
function main() {
    'use strict';
    var array = [1],
        prime_array = eratosthenes(Math.pow(2, 26)),
        prime = 0,
        i=1,
        j=0,
        cnt=0,
        bool = true, per = 0.10, res;
    while(bool){
        if(cnt %4 === 0){
            if(prime/(cnt + 1) < per && j!== 0){
                res = 2*j +1;
                bool = false;
            }
            if(prime[prime.length -1] < array[array.length - 1]){
                console.log('problem');
            }
            j+=1;
            console.log(prime/(cnt + 1));
        }
        i+=(2*j);
        if(prime_array.indexOf(i) >= 0){
            prime+=1;
        }
        cnt+=1;
    }
    return res;
}

console.log(main(process.argv[2]));