const sudokuTest = (sudoku)=>{

    let len = sudoku.length;
    let flag = true;
    let count = 0;

    for( let i = 0; i < len; i++){
        for( let j = 0; j < sudoku[i].length; j++){
            let matCount = 0;
            for( let k = 0; k < sudoku[i][j].length; k++){
                for ( let l = 0; l < sudoku[i][j][k].length; l++){
                    matCount++;
                }
            }
            if(matCount !== 9 || matCount > 9){
                throw new Error("there should only be 9 cells in one 3*3 block")
            }
        }
    }

    for( let i = 0; i < len; i++){
        for( let j = 0; j < sudoku[i].length; j++){
            for( let k = 0; k < sudoku[i][j].length; k++){
                for ( let l = 0; l < sudoku[i][j][k].length; l++){
                    count++;
                    if(sudoku[i][j][k][l] > 9){
                        throw new Error("number should not be greater than 9")
                    }
                }
            }
        }
    }
    if(count !== 81){
        throw new Error("there sholud be a total of 81 cells")
    }

    for( let i = 0; i < len; i++){
        for( let j = 0; j < sudoku[i].length; j++){
            flag = Unique(sudoku[i][j]);
            if(flag === false){
                throw new Error("Each number in the 3*3 block should be different")
            }
        }
    }

    return ("This is a sudoku");
}

module.exports = sudokuTest;

function Unique(matrix){
    let obj = {};
    let flag = true;
    
    for(let i = 0; i < matrix.length; i++){
        for(let j = 0; j < matrix[i].length; j++){
            if(obj[matrix[i][j]]){
                obj[matrix[i][j]]++;
            }
            else {
                obj[matrix[i][j]] = 1
            }
        }
    }

    for(let key in obj){
        if(obj[key] > 1){
           flag = false;
        }
    }

    return flag;
}

let sudoku = [
    [
        [
            [9, 2, 6], [1, 5, 8], [3, 4, 7]
        ],
        [
            [4, 5, 1], [7, 3, 6], [9, 8, 2]
        ],
        [
            [3, 7, 8], [4, 2, 9], [5, 6, 1]
        ]
    ],
    [
        [
            [4, 6, 9], [2, 8, 1], [7, 3, 5]
        ],
        [
            [1, 7, 5], [3, 6, 9], [2, 4, 8]
        ],
        [
            [8, 3, 2], [7, 4, 5], [1, 9, 6]
        ]
    ],
    [
        [
            [5, 1, 3], [6, 9, 4], [8, 7, 2]
        ],
        [
            [6, 2, 7], [8, 1, 3], [5, 9, 4]
        ],
        [
            [9, 8, 4], [2, 5, 7], [6, 1, 3]
        ]
    ]
]

console.log(sudokuTest(sudoku))