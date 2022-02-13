function checkFor3(num1,num2){
    const sumOfNumbers = num1 + num2;
    var containsThree = sumOfNumbers.toString().indexOf("3") > -1;  //checking if the sum includes 3
    if((num1 === 3 || num2 === 3) && containsThree){
        return true;
    }else {
        return false;
    }
}