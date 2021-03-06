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
function main() {
    'use strict';
    var prime = 0,
        i=1,
        j=0,
        k,
        cnt=0,
        per = 0.10;
    j+=1;
    for(k=0;k<4;k+=1){
        i+=(2*j);
        if(isPrime3(i)){
            prime+=1;
        }
    }
    cnt+=4;
    while(prime/(cnt +1) > per){
        j+=1;
        for(k=0;k<4;k+=1){
            i+=(2*j);
            if(isPrime3(i)){
                prime+=1;
            }
        }
        cnt+=4;
    }
    return 2*j +1;
}

console.log(main(process.argv[2]));