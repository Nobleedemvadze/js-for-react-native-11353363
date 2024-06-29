function processArray(numbers){
    const resultArray = [];
    for(let number of numbers){
        if(number % 2 == 0){
            resultArray.push(number ** 2)
        }
        else{
            resultArray.push(number * 3)
        }
    }
    return resultArray
}

function formatArrayStrings(arrayString, arrayNumber){
    const ourFormatArray = [];
    for(let i = 0; i < arrayString.length; i++){
        let string = arrayString[i]
        let number = arrayNumber[i]

        if(number % 2 == 0){
            ourFormatArray.push(string.toUpperCase());
        }else{
            ourFormatArray.push(string.toLowerCase());
        }
    }
    return ourFormatArray;
}

