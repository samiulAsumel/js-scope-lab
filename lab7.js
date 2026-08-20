// IIFE: the wrapping function runs once, immediately, and its scope
// becomes the only place balance can ever be touched from.
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

  return { deposit, withdraw, getBalance }; // only this trio is exposed — the public API
})();

bankAccount.deposit(100);
bankAccount.withdraw(30);
console.log(bankAccount.getBalance());
console.log(bankAccount.balance); // undefined — balance is private, not on the returned object
