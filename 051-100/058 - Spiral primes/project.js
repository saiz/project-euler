function main() {
    'use strict';
    var array = [],
        i=1,
        j=1,
        cnt=1,
        bool = true;
    while(bool){
         console.log(i);
        cnt+=1;
        if(cnt %4 === 0){
            cnt = 0;
            j+=1;
        }
        i+=Math.pow(2,j);

    }
    return i;
}

console.log(main(process.argv[2]));