function checkArrayIndex(dataset, x, y) {
	'use strict';
    if (dataset.length > x && dataset[x].length > y) {
        return dataset[x][y];
    }

    return null;
}
function generate_matrix(n) {
	'use strict';
	var matrix=[], array = [], i;
	for(i = 0; i < n; i+=1) {
	    array.push(0);
	}
	for (i=0; i <n; i+=1){
		matrix[i]= array.slice(0);
	}
	return matrix;
}
function check_index(matrix,order,x,y){
	'use strict';
	switch (order[0]) {
        case 0: //right
        	if(checkArrayIndex(matrix,x + 1,y) === null){
        		return false;
        	}
        	break;
        case 1: //bot
        	if(checkArrayIndex(matrix,x,y + 1) === null){
        		return false;
        	}
        	break;
        case 2: //left
        	if(checkArrayIndex(matrix,x - 1,y) === null){
        		return false;
        	}
       		break;
        case 3: //top
        	if(checkArrayIndex(matrix,x,y - 1) === null){
        		return false;
        	}
       		break;
    }
    return true;
}
function insert(matrix,order,x,y){
	'use strict';
    var res = {
    	x:0,
    	y:0
    };
	switch (order[0]) {
        case 0: //right
        	res.y = y;
        	res.x = x + 1;
        	matrix[res.y][res.x] = matrix[y][x] + 1;
        	if(matrix[y + 1][x + 1] === 0){ //bot
        		order.push(order[0]);
        		order.shift();
        	}

        	break;
        case 1: //down
        	res.y = y + 1;
        	res.x = x;
        	matrix[res.y][res.x] = matrix[y][x] + 1;
        	if(matrix[y + 1][x - 1] === 0){ //left
        		order.push(order[0]);
        		order.shift();
        	}
        	break;
        case 2: //left
        	res.y = y;
        	res.x = x - 1;
        	matrix[res.y][res.x] = matrix[y][x] + 1;
        	if(matrix[y - 1][x - 1] === 0){ //top
        		order.push(order[0]);
        		order.shift();
        	}
       		break;
        case 3: //up
        	res.y = y - 1;
        	res.x = x;
        	matrix[res.y][res.x] = matrix[y][x] + 1;
        	if(matrix[y - 1][x + 1] === 0){ //right
        		order.push(order[0]);
        		order.shift();
        	}
        	break;
    }
    return res;
}
function populate_matrix(n){
	'use strict';
	var matrix = generate_matrix(n),
		order  = [0,1,2,3],
		x = Math.floor(n/2),
		y = Math.floor(n/2),
		obj;
	matrix[y][x] = 1;
	while(check_index(matrix,order,x,y)){
		obj = insert(matrix,order,x,y);
		x = obj.x;
		y = obj.y;
	}
	return matrix;
}
function sum_of_diagonals(matrix){
	'use strict';
	var n = matrix.length,
	sum = 0,
	i;
	for(i = 0; i< matrix.length;i+=1){
		sum+=matrix[i][i];
	}
	for(i = 0; i< matrix.length;i+=1){
		sum+=matrix[i][matrix.length - 1 - i];
	}
	sum -=matrix[Math.floor(n/2)][Math.floor(n/2)];
	return sum;
}
function main(n) {
	'use strict';
	var matrix = populate_matrix(n);
	//console.log(matrix);
	return sum_of_diagonals(matrix);
}

console.log(main(process.argv[2]));