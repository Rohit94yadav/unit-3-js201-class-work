const sumArg = require('../sum_arguments.js');

describe("tests for checking sum",()=>{
    test("sum of 1, 5 should be 6", ()=>{
        expect(sumArg(1, 5)).toBe(6);
    })
    test("sum of 1 should be 1", ()=>{
        expect(sumArg(1)).toBe(1);
    })
    test("sum of 1 and 'a' should throw error that input should be a number", ()=>{
        expect(()=>sumArg(1, 'a').toThrowError(new Error("input should be a number")))
    })
    test("sum of undefind and undefined should be 0", ()=>{
        expect(sumArg()).toBe(0);
    })
})