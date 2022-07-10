const timeCheck = require('../time.js');

describe("convert milliseconds to proper time", ()=>{
    test("time is 5200, output should be 5 seconds", ()=>{
        expect(timeCheck(5200)).toBe('5 seconds')
    })
    test("time is 60000, output should be 1 minute", ()=>{
        expect(timeCheck(60000)).toBe('1 minute')
    })
    test("time is 180000, output should be 3 minutes", ()=>{
        expect(timeCheck(180000)).toBe('3 minutes')
    })
    test("time is 200000, output should be 3 minutes 20 seconds", ()=>{
        expect(timeCheck(200000)).toBe('3 minutes 20 seconds')
    })
    test("time is 3600000, output should be 1 hour", ()=>{
        expect(timeCheck(3600000)).toBe('1 hour')
    })
    test("time is 3610000, output should be 1 hour 10 seconds", ()=>{
        expect(timeCheck(3610000)).toBe('1 hour 10 seconds')
    })
    test("time is 5400000, output should be 1 hour 30 minutes", ()=>{
        expect(timeCheck(5400000)).toBe('1 hour 30 minutes')
    })
    test("time is 5440000, output should be 1 hour 30 minutes 40 seconds", ()=>{
        expect(timeCheck(5440000)).toBe('1 hour 30 minutes 40 seconds')
    })
    test("time is 7200000, output should be 2 hours", ()=>{
        expect(timeCheck(7200000)).toBe('2 hours')
    })
    test("time is 7230000, output should be 2 hours 30 seconds", ()=>{
        expect(timeCheck(7230000)).toBe('2 hours 30 seconds')
    })
    test("time is 7500000, output should be 2 hours 5 minutes", ()=>{
        expect(timeCheck(7500000)).toBe('2 hours 5 minutes')
    })
    test("time is 7540000, output should be 2 hours 5 minutes 40 seconds", ()=>{
        expect(timeCheck(7540000)).toBe('2 hours 5 minutes 40 seconds')
    })
})