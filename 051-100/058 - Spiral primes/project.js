function main() {
    'use strict';
    var array = [],
        i=1,
        j=0,
        cnt=0,
        bool = true;
    while(bool){
        if(cnt %4 === 0){
            j+=1;
        }
        i+=Math.pow(2,j);
        console.log(i,j,cnt);
        cnt+=1;
    }
    return i;
}

console.log(main(process.argv[2]));