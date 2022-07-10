const matrixSum = (matrix = [[0]])=>{
    let sum = 0;
    if (matrix === null){
        sum = 0;
    }
    else {
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){
                if( typeof matrix[i][j] === "string" ){
                    throw new Error("values should be numbers")
                };
                sum += matrix[i][j]
            }
        }
    }
    return sum;
}

module.exports = matrixSum;