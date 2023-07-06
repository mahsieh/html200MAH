let balanceTotal = 0;
let totalDeposited = 0;
let userInput = '';

function welcome () {
    
    do {
        userInput = prompt("Please select what you would like to do from the following options: Enter 'W' to withdraw, 'D' to deposit, 'B' to view your balance, 'Q' to quit.");
        selection = userInput.toLowerCase();
        console.log(selection);

        switch (selection) {
            case 'w':
                let wAmount = prompt('Enter the amount you wish to withdraw.');
                wAmount = Number(wAmount);
                withdraw(wAmount);
                break;

            case 'd':
                let dAmount = prompt('Enter the amount you wish to deposit.');
                dAmount = Number(dAmount);
                if (dAmount + totalDeposited > 50000)
                {
                    alert('You can only deposit up to $50,000. You can only deposit an additional $' + (50000-totalDeposited));
                    break;
                }
                deposit(dAmount);
                break;
            case 'b':
                alert('Your current balance is: ' + balanceTotal);
                break;
        }
    }    while (userInput != 'q'); 
}

function withdraw(withdrawal) {
    let runningBalance = balanceTotal - withdrawal;

    if (runningBalance < 0) {
        alert('You do not have a sufficient balance to make that withdrawal');
    }

    else if (runningBalance < 300) {
        let response = prompt('Your withdrawal will leave you with less than $300. Are you sure you wish to continue? (Y/N)');
        response = response.toLowerCase();
        switch (response) {
            case 'y':
                balanceTotal = balanceTotal - withdrawal;
            case 'n':
                break;
        }
    }
    else {
        balanceTotal = balanceTotal - withdrawal;
    }
}

function deposit(money) {
    balanceTotal = balanceTotal + money;
    totalDeposited = totalDeposited + money;
}