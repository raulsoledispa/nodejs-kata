const compare = (obj1,obj2) => {
    const param1 = obj1.toUpperCase();
    const param2 = obj2.toUpperCase();

    if(param1 > param2){
        return 1;
    }else if(param1 < param2){
        return -1;
    }
    return 0;
}

module.exports = compare;