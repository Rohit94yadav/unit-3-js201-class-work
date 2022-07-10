const passwordValidator = ( password )=>{
    const regExUpp = /[A-Z]/;
    let upperFlag = regExUpp.test(password);
    
    const regExLow = /[a-z]/;
    let lowerFlag = regExLow.test(password);

    const regExSp = /[!@#$%^&*(),.<>/';:"{}\|?]/;
    let spFlag = regExSp.test(password);

    let flag = true;
    if(password.length < 6){
        flag = false;
        throw Error(new Error("Password Length should be greater than 6"));
    }
    else if ( upperFlag === false ){
        flag = false;
        throw Error(new Error("Password should contain a upper case character"));
    }
    else if ( lowerFlag === false ){
        flag = false;
        throw Error(new Error("Password should contain a lower case character"));
    }
    else if ( spFlag === false ){
        flag = false;
        throw Error(new Error("Password should contain a special character"));
    }
    return flag;
}
module.exports = passwordValidator;