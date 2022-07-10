const diff = ( a=0, b=0 )=>{
    if( typeof a === "string" || typeof b === "string"){
        throw new Error("inputs should be numbers")
    };
    return Math.abs(a - b);
};

module.exports = diff;