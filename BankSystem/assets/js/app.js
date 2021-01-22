var Amount = 10000;
let rec = {
    accountNum: "",
    balance: 0
}

function Deposit(amount){
    Amount = Number(Amount) + Number(amount);
    return "Your account is deposited with Birr " + amount + " and You have Birr " + Amount 
}

function Withdraw(amount){
    if((Number(amount) < Number(Amount)) && (Number(amount) <= 2000)){
        Amount = Number(Amount) - Number(amount);
        return "Your withdraw Birr " + amount + " and You have Birr " + Amount 
    }
    else{
        return "You cannot withdraw this much."
    }  
}

function Balance(){
    return "You have " + Amount + " Birrs."
}

function Transfer(amount, accNum){

    if(Number(amount) > Number(Amount)){
        return "You cannot transfer this much";

    }
    else{
        rec.accountNum = accNum;
        rec.balance = Number(rec.balance) + Number(amount);
        Amount = Number(Amount) - Number(amount);
        return "Your remaining balance is Birr " + Amount + " with a transfer of Birr " + amount + "! Receivers balance Birr " + rec.balance;
    }
}

(function() {
    let choice = prompt("1, For deposit 2, For withdraw 3, For balance 4, For transfer.")

    if(choice == 1){
        var dep = prompt("How much do you want to deposit");
        alert(Deposit(dep));
    }

    if(choice == 2){
        var wit = prompt("How much do you want to withdraw");
        alert(Withdraw(wit));
    }

    if(choice == 3){
        alert(Balance());
    }

    if(choice == 4){
        recA = prompt("Enter the receivers account number")
        var tra = prompt("How much do you want to transfer");
        alert(Transfer(tra, recA));
    }
})();
