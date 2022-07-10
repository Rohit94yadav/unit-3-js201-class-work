const sudokuTest = require('../sudoku.js');

describe("sudoku Test", ()=>{

    test("this is a sudoku", ()=>{
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
        expect(sudokuTest(sudoku)).toBe("This is a sudoku")
    })

    test("no of cells equal to 90, throw error is there sholud be a total of 81 cells", ()=>{
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
            ],
            [
                [
                    [5, 1, 3], [6, 9, 4], [8, 7, 2]
                ]
            ]
        ]
        expect(()=>sudokuTest(sudoku)).toThrowError(new Error("there sholud be a total of 81 cells"));
    })

    test("one number is 12, throw error is number should not be greater than 9", ()=>{
        let sudoku = [
            [
                [
                    [9, 2, 6], [1, 5, 8], [3, 4, 7]
                ],
                [
                    [4, 5, 1], [7, 13, 6], [9, 8, 2]
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
        expect(()=>sudokuTest(sudoku)).toThrowError(new Error("number should not be greater than 9"));
    })

    test("one matrix there are 10 cells, throw error is there should only be 9 cells in one 3*3 block", ()=>{
        let sudoku = [
            [
                [
                    [9, 2, 6], [1, 5, 8], [3, 4, 7]
                ],
                [
                    [4, 5, 1], [7, 3, 6], [9, 8, 2]
                ],
                [
                    [3, 7, 8], [4, 2, 9], [5, 6, 1, 5]
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
        expect(()=>sudokuTest(sudoku)).toThrowError(new Error("there should only be 9 cells in one 3*3 block"));
    })

    test("repeated numbers in sudoku, throw error is Each number in the 3*3 block should be different", ()=>{
        let sudoku = [
            [
                [
                    [9, 2, 6], [1, 4, 8], [3, 4, 7]
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
        expect(()=>sudokuTest(sudoku)).toThrowError(new Error("Each number in the 3*3 block should be different"))
    })
})