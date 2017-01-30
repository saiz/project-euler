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
function percent_prim(array){
    var cnt = 0,
        i;
    for(i=0;i<array.length;i+=1){
        if(isPrime3(array[i])){
            cnt+=1;
        }
    }
    return cnt/array.length;
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
        prime = []
        i=1,
        j=0,
        cnt=0,
        bool = true, per = 0.10;
    while(bool){
        if(cnt %4 === 0){
            // if(percent_prim(array) < per && j!== 0){
            //     console.log(2*j+1);
            //     bool = true;
            // }
            console.log(percent_prim(array));
            j+=1;
        }
        i+=(2*j);
        array.push(i);
        cnt+=1;
    }
    return i;
}

console.log(main(process.argv[2]));