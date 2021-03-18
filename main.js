let money = Number( prompt("Ваш бюджет на месяц?") );
let time = prompt("Введите дату в формате YYYY-MM-DD");

let expensesQuest1 = prompt("Введите обязательную статью расходов в этом месяце");
let expensesQuest2 = Number( prompt("Во сколько оойдется?") );

let appData = {
    budget: money,
    timeData: time,
    expenses: `${expensesQuest1} : ${expensesQuest2}`,
    optionalExpenses: "",
    income: [],
    saving: false
}

alert(money / 30);
