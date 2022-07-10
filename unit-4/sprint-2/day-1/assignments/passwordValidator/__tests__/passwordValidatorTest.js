const passwordValidator = require("../passwordValidator.js")

describe("password validation", function(){
    test("password length > 6", ()=>{
        expect(passwordValidator("@Masaii")).toBe(true)
    })
    test("check for upperCase in password", ()=>{
        expect(passwordValidator("@Masaii")).toBe(true)
    })
    test("check for lowerCase character in password", ()=>{
        expect(passwordValidator("@Masaii")).toBe(true)
    })
    test("check for special characters in password", ()=>{
        expect(passwordValidator("@Masaii")).toBe(true)
    })
})