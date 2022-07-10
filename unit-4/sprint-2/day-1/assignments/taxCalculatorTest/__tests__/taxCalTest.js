const taxCal = require('../tax_calculator.js');

describe("tax calculator", ()=>{
    test("income is 100000, tax should be 0",()=>{
        expect(taxCal(100000)).toBe(0);
    })
    test("income is 250000, tax should be 0",()=>{
        expect(taxCal(250000)).toBe(0);
    })
    test("income is 400000, tax should be 15000",()=>{
        expect(taxCal(400000)).toBe(15000);
    })
    test("income is 500000, tax should be 25000",()=>{
        expect(taxCal(500000)).toBe(25000);
    })
    test("income is 700000, tax should be 65000",()=>{
        expect(taxCal(700000)).toBe(65000);
    })
    test("income is 1000000, tax should be 125000",()=>{
        expect(taxCal(1000000)).toBe(125000);
    })
    test("income is 1200000, tax should be 185000",()=>{
        expect(taxCal(1200000)).toBe(185000);
    })
    test("income is 4000000, tax should be 1025000",()=>{
        expect(taxCal(4000000)).toBe(1025000);
    })
})