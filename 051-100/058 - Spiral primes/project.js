function main() {
    'use strict';
    var array = [],
        i=1,
        j=1,
        cnt=1,
        bool = true;
    while(bool){
        cnt+=1;
        if(cnt %4){
            cnt = 0;
            j+=1;
        }
        i+=Math.pow(2,j);
        console.log(i);
    }
    return i;
}

console.log(main(process.argv[2]));