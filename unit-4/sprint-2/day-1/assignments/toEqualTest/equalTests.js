function test(description, callback){
    console.log(description);
    callback();
}

function expect(input){
    function __toEqual( inp, out ){

        let flag= true;

        const keysInp = Object.keys(inp);
        const keysOut = Object.keys(out);

        if( keysInp.length !== keysOut.length ){
            flag = false;
            return flag;
        }
        
        for( let key in inp ){
            if( typeof inp[key] === "object" && typeof out[key] === "object" && (inp[key] !== null && out[key] !== null )){
                if ( Array.isArray(inp[key]) !== Array.isArray(out[key]) ){
                    flag = false;
                    return flag;
                }
                flag = __toEqual( inp[key], out[key] )
                if( !flag ){
                    return flag
                }
            }
            else if( inp[key] !== out[key] ) {
                flag = false;
                return flag;
            }
        }
        return flag;
    }

    function toEqual( output ){
        const response = __toEqual(input, output )
        if ( response ){
            console.log('test case passed');
        }
        else {
            console.log('test case failed');
        }
    }

    return { toEqual }
}

test("{} should be equal to {}", ()=>{
    expect( {} ).toEqual( {} )
})
test("[] should be equal to []", ()=>{
    expect( [] ).toEqual( [] )
})
test("{ a: 1, b: 2 } should be equal to { a: 1, b: 2 }", ()=>{
    expect( { a: 1, b: 2 } ).toEqual( { a:1 , b:2 } )
})
test("[ 1, 2, 3 ] should be equal to [ 1, 2, 3 ]", ()=>{
    expect( [ 1, 2, 3 ] ).toEqual( [ 1, 2, 3 ] )
})
test("{ a: 1, b: { c: 1, d: 2 }} should be equal to { a: 1, b: { c: 1, d: 2 }}", ()=>{
    expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { c: 1, d: 2 }} ) 
})
test("[ 1, 2, [ 1, 2 ] ] should be equal to [ 1, 2, [ 1, 2 ] ]", ()=>{
    expect( [ 1, 2, [ 1, 2 ] ] ).toEqual( [ 1, 2, [ 1, 2 ]  ] )
})
test("{ a: 1, b: { c: 1, d: 2 }} should be equal to { a: 1, b: { e: 1, d: 2 }}", ()=>{
    expect( { a: 1, b: { c: 1, d: 2 }} ).toEqual( { a: 1, b: { e: 1, d: 2 }} ) 
})
test("[ 1, 2, [ 1, 3] ] should be equal to [ 1, 2, [ 1, 2]  ]", ()=>{
    expect( [ 1, 2, [ 1, 3] ] ).toEqual( [ 1, 2, [ 1, 2]  ] )
})