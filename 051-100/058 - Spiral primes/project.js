function main() {
    'use strict';
    var array = [],
        i=1,
        cnt=0,
        bool = true;
    while(bool){
        cnt+=1;
        if(cnt %4){
            cnt = 0;
            i+=1;
        }
        i+=Math.pow(2,i);
        console.log(i);
    }
    return i;
}

console.log(main(process.argv[2]));