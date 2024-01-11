let accountA = {
  fullName: "Erdi Salgın",
  accountNum: "12345678",
  balance: 2000,
  addAccount: 1000,
};

let accountB = {
  fullName: "Bengisu Salgın",
  accountNum: "23264564",
  balance: 3000,
  addAccount: 2000,
};

function withdraw(account, amount) {
  console.log(`Hello ${account.fullName}`);
  if (account.balance >= amount) {
    account.balance = account.balance - amount;
    console.log("You can get your money!");
  } else {
    let total = account.balance + account.addAccount;
    if (total >= amount) {
      if (confirm("Would you like to use your additional account?")) {
        console.log("You can get your money!");
        let balance = account.balance;
        let addAccount = amount - balance;
        account.balance = 0;
        account.addAccount = account.addAccount - addAccount;

      } else {
        console.log(
          `$(account.accountNum) in your account number ${amount} does not exist.`
        );
      }
    } else {
      console.log("Sorry, insufficient balance!");
    }
  }
}

withdraw(accountA, 2000);
