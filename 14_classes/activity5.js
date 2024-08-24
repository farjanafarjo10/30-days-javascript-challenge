// Activity 5: Private Fields

// Task 9:

class Account {
  #balance;
  constructor() {
    this.#balance = 0;
  }

  deposit(money) {
    this.#balance += money;
  }

  withdraw(money) {
    this.#balance -= money;
  }

  getbalance() {
    return this.#balance;
  }
}

// Task 10:

const acc = new Account();

acc.deposit(10000);
console.log(`Balance = ${acc.getbalance()}`);

acc.withdraw(1000);
console.log(`Balance = ${acc.getbalance()}`);

acc.withdraw(500);
console.log(`Balance = ${acc.getbalance()}`);

acc.deposit(200);
console.log(`Balance = ${acc.getbalance()}`);