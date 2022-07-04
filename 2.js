    let arr = [7,2,5,3,5,3];
    let brr = [7,2,5,4,6,3,5,3]
    let obj1={};
    let obj2={};
    let bag1;
    let bag2;
    let newarr=[];
    for(let i = 0;i< arr.length;i++){
        if(obj1[arr[i]]){
            obj1[arr[i]]++;
        }else{
            obj1[arr[i]]=1;
        }
    }
    
    for(let i = 0 ;i< brr.length;i++){
        if(obj2[brr[i]]){
            obj2[brr[i]]++;
        }else{
            obj2[brr[i]]=1;
        }
    }
    
    for(let key in obj1 && obj2 ){
       
    }
    
    for(let key in obj2 ){
        bag2=key;
    }

// if(Object.keys(obj2) !== Object.keys(obj1)){
    
// }
    
    

