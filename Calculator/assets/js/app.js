// The functions to be performed
function add(a,b){
    return "The result is " + Number(a) + Number(b);
}

function sub(a,b){
    return "The result is " +  Number(a) - Number(b);
}

function mul(a,b){
    return "The result is " +  Number(a) * Number(b);
}

function div(a,b){
    if(b != 0){return "The result is " +  (Number(a) / Number(b))}
    return "change the second number."
}

function max(a,b){
    if(Number(a) > Number(b)){return "The result is " +  a}
    else{return "The result is " +  b}
}

function min(a,b){
    if(Number(a) < Number(b)){return "The result is " +  a}
    else{return "The result is " +  b}
}

function average(a,b){
    return "The result is " + (Number(a)+Number(b))/2;
}

function square(a){
    return "The result is " +  a*a;
}

function addMany(){
    var value = prompt("How many numbers do you wanna add?");

    //Take the numbers to be calculated step by step
    numbers = new Array();
    for(let i = 0; i < parseInt(value); i++){
        numbers[i] = prompt("Enter number");   
    }

    // Do the multiplication of the numbers
    var a = 0;
    for(let i = 0; i < parseInt(value); i++){
        a = Number(a) + Number(numbers[i]);
    }

    return "The result is " + a;
}

function mulMany(){
    var value = prompt("How many numbers do you wanna multiply?");

    //Take the numbers to be calculated step by step
    numbers = new Array();
    for(let i = 0; i < parseInt(value); i++){
        numbers[i] = prompt("Enter number");   
    }

    // Do the multiplication of the numbers
    var a = 1;
    for(let i = 0; i < parseInt(value); i++){
        a = a * parseInt(numbers[i]);
    }

    return "The result is " + a;
}

// The IIFEs statement
(function() {
    let service = prompt("Which service do you want?  1, Addition  2, Subtraction  3, Multiplication  4, Division 5, Maximum 6, Minimum 7, average 8, square 9, Addition of many numbers 10, Multiplication of many numbers")

    if(service == 1){
        var a = prompt("Enter first number")
        var b = prompt("Enter second number")
        console.log(add(a,b))
    }

    if(service == 2){
        var a = prompt("Enter first number")
        var b = prompt("Enter second number")
        console.log(sub(a,b))
    }

    if(service == 3){
        var a = prompt("Enter first number")
        var b = prompt("Enter second number")
        console.log(mul(a,b))
    }

    if(service == 4){
        var a = prompt("Enter first number")
        var b = prompt("Enter second number")
        console.log(div(a,b))
    }

    if(service == 5){
        var a = prompt("Enter first number")
        var b = prompt("Enter second number")
        console.log(max(a,b))
    }

    if(service == 6){
        var a = prompt("Enter first number")
        var b = prompt("Enter second number")
        console.log(min(a,b))
    }

    if(service == 7){
        var a = prompt("Enter first number")
        var b = prompt("Enter second number")
        console.log(average(a,b))
    }

    if(service == 8){
        var a = prompt("Enter a number")
        console.log(square(a))
    }

    if(service == 9){
        console.log(addMany())
    }

    if(service == 10){
        console.log(mulMany())
    }
})();