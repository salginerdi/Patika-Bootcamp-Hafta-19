let balance = 1000;

let info =
  "Please select the operation you want to perform!" +
  "\r\n" +
  "1 - Show Balance" +
  "\r\n" +
  "2 - Money Withdrawal" +
  "\r\n" +
  "3 - Deposit Money" +
  "\r\n" +
  "4 - Exit" +
  "\r\n";

let select = prompt(info);

switch (select) {
  case "1":
    alert(`Your Balance ${balance}$`);
    break;
  case "2":
    let withdrawn = prompt("Please enter the amount to be withdrawn!");
    if (withdrawn <= 1000 && withdrawn >= 0) {
      alert(`Your remaining money ${balance - withdrawn}$`);
    } else {
      alert(
        "Please enter a value equal to your balance, less than your balance or greater than 0!"
      );
      break;
    }
  case "3":
    let deposit = prompt(
      "Please enter the amount of money you wish to deposit!"
    );
    if (deposit < 0) {
      alert("Please enter a positive value!");
    } else {
      let result = Number(balance) + Number(deposit);
      alert(`Your money in your account after adding money ${result}$`);
    }
    break;
  case "4":
    break;
  default:
    alert("Please enter a number between 1 and 4!");
}
