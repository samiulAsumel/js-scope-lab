const bankAccount = (function () {
  let balance = 0;

  function deposit(amount) {
    balance += amount;
    console.log(`Deposited ${amount}, balance: ${balance}`);
  }

  function withdraw(amount) {
    if (amount > balance) {
      console.log(`Withdraw failed, balance: ${balance}`);
      return;
    }
    balance -= amount;
    console.log(`Withdrew ${amount}, balance: ${balance}`);
  }

  function getBalance() {
    return balance;
  }

  return { deposit, withdraw, getBalance };
})();

bankAccount.deposit(100);
bankAccount.withdraw(30);
console.log(bankAccount.getBalance());
console.log(bankAccount.balance);
