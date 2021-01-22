var Amount = "1000"

let Receiver = {
    AccNum : "",
    balance : 0
}

function Deposit(amount){
    Amount = Number(Amount) + Number(amount);
    return ("Your account has been deposited with Birr " + amount + " and You have Birr " + Amount);
}

function Withdraw(amount){
    if (Amount > amount ||  amount < 500){
        Amount = Amount - amount 
        return ("You have taken out Birr " + amount + " and You have Birr " + Amount)
    }
    
    else {
        return ("You cannot make a withdrawal.")
    }
}

function Balance(){
    return ("Your Balance is Birr " + Amount)
}

function Transfer(accNum, amount){
    if(Number(Amount) > Number(amount)){
        Receiver.AccNum = accNum;
        Receiver.balance = Number(Receiver.balance) + Number(amount);
        Amount = Amount - amount;
        return "Your balance is Birr " + Amount + " and Receiver's balance is Birr " + Receiver.balance;
    }
    else{
        return "You cannot transfer this much."
    }
}

(function() {
    var value;
    var choice = prompt("1, To deposit\n2, To withdraw\n3, To see balance\n 4, To transfer");
    if (choice == 1){
        value = prompt("Enter the money you want to deposit.");
        alert(Deposit(value));
    }
    if (choice == 2){
        value = prompt("Enter the money you want to withdraw.");
        alert(Withdraw(value));
    }
    if (choice == 3){
        alert(Balance(value));
    }
    if (choice == 4){
        var accNum = prompt("Enter the receiver's account number");
        value = prompt("Enter the money you want to transfer.");
        alert(Transfer(accNum, value));
    }
    
})();

