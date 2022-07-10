const matrixSum = require("../matirxSum");

describe("tests for sum of values in a matrix", function(){

    test("[[1, 2, 3]] sholud be 6", ()=>{
        expect(matrixSum([[1, 2, 3]])).toBe(6)
    })
    test("[[1, 2, 3], [4, 5, 6]] should be 21", ()=>{
        expect(matrixSum([[1, 2, 3], [4, 5, 6]])).toBe(21);
    })
    test("[[1, 2, 3], [4, 5, 6], [7, 8, 9]] should be 45", ()=>{
        expect(matrixSum([[1, 2, 3], [4, 5, 6], [7, 8, 9]])).toBe(45);
    })
    test("[[1, 2], [3, 4], [5, 6]] should be 21", ()=>{
        expect(matrixSum([[1, 2], [3, 4], [5, 6]])).toBe(21);
    })
    test("matrix=undefined sum should be 0", ()=>{
        expect(matrixSum()).toBe(0);
    })
    test("[[5]] should be 5", ()=>{
        expect(matrixSum([[5]])).toBe(5);
    })
    test("[[1, 'a', 3], [4, 'b', 6]] should be an error: values should be numbers", ()=>{
        expect(()=> matrixSum([[1, 'a', 3], [4, 'b', 6]])).toThrowError(new Error("values should be numbers"));
    })
    test("[null] should be 0", ()=>{
        expect(matrixSum(null)).toBe(0);
    })
})