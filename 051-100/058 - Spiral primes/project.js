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
function main() {
    'use strict';
    var array = [1],
        i=1,
        j=0,
        cnt=0,
        bool = true, per = 0.10;
    while(bool){
        if(cnt %4 === 0){
            if(percent_prim(array) < per && j!){
                console.log(2*j+1);
                bool = true;
            }
            j+=1;
        }
        i+=(2*j);
        array.push(i);
        cnt+=1;
    }
    return i;
}

console.log(main(process.argv[2]));