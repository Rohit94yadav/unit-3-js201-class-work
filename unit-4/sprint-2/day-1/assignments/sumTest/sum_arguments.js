const sumArg = (...arr)=>{
    let sum = 0;

    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "string"){
            throw new Error("input should be a number");
        }
        sum += arr[i];
    }

    return sum;
}

module.exports = sumArg;