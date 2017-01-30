function main() {
    'use strict';
    var array = [],
        i=0,
        j=0,
        cnt=0,
        bool = true;
    while(bool){
        cnt+=1;
        if(cnt %4 === 0){
            j+=1;
        }
        i+=Math.pow(2,j);
        console.log(i,j,cnt);
    }
    return i;
}

console.log(main(process.argv[2]));