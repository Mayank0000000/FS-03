
//Q1....
localStorage.setItem("firstName", "Mayank");
localStorage.setItem("lastName", "Joshi");
localStorage.setItem("country", "India");
localStorage.setItem("city", "New Delhi");

const name = localStorage.getItem("firstName");
console.log(name);
console.log(localStorage.getItem("lastName"));
console.log(localStorage.getItem("country"));
console.log(localStorage.getItem("city"));

//Q2.....
const student = {
  firstName: "Mayank",
  lastName: "Joshi",
  age: 25,
  skills: ["JavaScript", "HTML", "CSS"],
  country: "India",
  enrolled: {
    HTML: true,
    CSS: true,
    React: false
  }
};
localStorage.setItem("student", JSON.stringify(student));
console.log(JSON.parse(localStorage.getItem("student")));

//Q3...

const personAccount = {
  firstName: "Mayank",
  lastName: "Joshi",
  incomes: new Map(),
  expenses: new Map(),
  totalIncome: function () {
    let total = 0;
    for (const [amount] of this.incomes) {
      total += amount;
    }
    return total;
  },
  totalExpense: function () {
    let total = 0;
    for (const [amount] of this.expenses) {
      total += amount;
    }
    return total;
  },
  accountInfo: function () {
    return `Account information for ${this.firstName} ${
      this.lastName
    }: \nTotal Income: ${this.totalIncome()} \nTotal Expenses: ${this.totalExpense()} \nAccount Balance: ${this.accountBalance()}`;
  },
  addIncome: function (amount, description) {
    this.incomes.set(amount, description);
  },
  addExpense: function (amount, description) {
    this.expenses.set(amount, description);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  }
};

personAccount.addIncome(10000, "Salary");
personAccount.addIncome(2000, "Extra Time");

personAccount.addExpense(1000, "Groceries");
personAccount.addExpense(100, "Travelling");

console.log(personAccount.incomes);
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());

// Store the personAccount object in localStorage
localStorage.setItem("personAccount", JSON.stringify(personAccount));

console.log(JSON.parse(localStorage.getItem("personAccount")));


