const diff = require("../diff.js");

describe("Tests for difference function", function(){
    test("diff of 2 and 3 should be 1", ()=>{
        expect(diff( 2, 3 )).toBe(1)
    })
    test("diff of 4 & 8 should not be 1", ()=>{
        expect(diff( 4, 8 )).not.toBe(1)
    })
    test("diff of 1 and 'a should be an error inputs should be numbers", ()=>{
        expect(()=> diff(1, 'a')).toThrowError(new Error("inputs should be numbers"))
    })
    test("diff of undefined, undefined should be 0", ()=>{
        expect(diff()).toBe(0);
    })
    test("diff of 1, undefined should be 1", ()=>{
        expect(diff(1)).toBe(1)
    })
});