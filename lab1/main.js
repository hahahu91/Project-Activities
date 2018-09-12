getWeekDay();

function getWeekDay() {
    const date = new Date();
    var weekDay = getWeekDayInString(date.getDay());

    alert(weekDay);
}
function getWeekDayInString(weekDay) {
    switch(weekDay) {
        case 0: 
          return 'Воскресенье';
        case 1: 
          return 'Понедельник';
        case 2: 
          return 'Вторник';
        case 3:
          return 'Среда';
        case 4:
          return 'Четверг';
        case 5:
          return 'Пятница';
        case 6:
          return 'Суббота';
        default:
          return 'Непонятный';
      }
}

const user = {};
user.name = "Вася";
user.surname = "Петров";
console.log(user);
user.name = "Сергей";
console.log(user);
delete user.name;
console.log(user);

const staff = {
    "Вася": 23,
    "Петя": 27,
    "Даша": 22,
}
identifySenior(staff);

function identifySenior(object){
    let senior = 0;
    for (const value of Object.values(object)) {
       if (value > senior) {
           senior = value;
       }
      }
    for (const key of Object.keys(object)) {
        if (object[key] == senior)
            console.log('Самый старший сотрудник', key);
       }  
}

function Calculator() {
    this.val1 = 0,
    this.val2 = 0,
    this.read = function() {
        this.val1 = parseInt(prompt('введите первое значение', 0)) || 0;
        this.val2 = parseInt(prompt('введите второе значение', 0)) || 0;
    }
    this.sum = function() {
        return this.val1+this.val2;
    }
    this.mul = function() {
        return this.val1*this.val2;
    }
}
const calculator = new Calculator();
calculator.read();

alert("Сумма = " + calculator.sum());
alert("Произведение = " + calculator.mul());
