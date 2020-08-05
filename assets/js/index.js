'use strict';

// Variable Tasks:
function variableTasks() {
   console.log("\nVariable Tasks:\n\n");

    // 1) multiplication
    let a = 3;
    let b = 7;

    console.log("1) multiplication result: " + (a * b));

    // 2) Division
    let c = 27;
    let d = 9;

    console.log("2) Division result: " + (c / d));

    // 3) Addition
    let e = 13;
    let f = 11;

    console.log("3) Addition result: " + (e + f));

    // 4) Defining Variables:
    let number = 11;
    let boolean = true;
    let char = "java script";
    let char2 = "100";

    console.log(`4) Defining Variable result: \n   number: ${number}\n   boolean: ${boolean}  \n   char: ${char}  \n   char2: ${char2}`);

    // 5) Shirt operation:
    let num = 1;

    num +=  11;
    num -= 11;
    num *= 11;
    num /= 11;
    num ++;
    num --;

    console.log(`5) Shirt operation result: ${num}`);

};

variableTasks();



// Prompt tasks:
function promptTasks() {
   console.log("\nPrompt Tasks:\n\n");
   
    //  1)  Squaring
    function squaring() {
        let number = prompt("Возведение в квадрат, ведите число:");
        number = Number(number);
        if (number) {
            console.log("1) Squaring result: " + (number**2));   
        } else {
            console.log("1) Squaring result: Your value is incorrect");
        };
        
    };
    
    squaring();

    //  2) Arithmetical Mean
    function arithmeticalMean() {
        let number1 = prompt ("Среднее арифметическое, введите первое число:");
        number1 = Number(number1);
        let number2 = prompt ("Среднее арифметическое, введите второе число:");
        number2 = Number(number2);

        if (number1 && number2) {
            console.log("2) Arithmetical Mean result: " + ((number1 + number2) / 2));  
        } else {
            console.log("2) Arithmetical Mean result: Your input value is incorrect");
        };
        
    };

    arithmeticalMean();


    
    //  3) Time translating
    function timeTranslating() {
        let minutes = prompt ("Перевести минуты в секунды, введите число:");
        minutes = Number(minutes);
        
        if (minutes) {
            let seconds = minutes * 60;
            console.log(`3) Time translating result: ${seconds}`);  
        } else {
            console.log("3) Time translating result: Your input value is incorrect");
        };

    };

    timeTranslating();

    //  4) Greeting  
    function greeting() {
        let greeting = 'Hello, ';
        let userName;
        userName = prompt("Введите имя пользователя:");
        if (userName != null && userName != '') {
            alert(greeting+userName);
        } else {
            alert(greeting+'Anonimous');
        }
    };

    greeting();

};
  
promptTasks();



// Condition Tasks:
function conditionTasks() {
    console.log("\nCondition Tasks:\n\n");

    // 1) Value 10 Condition 
    function valueCondition() {
        let variable = prompt("Введите значение переменной:");
        variable = Number(variable);
        if (variable == 10) {
            console.log("1) Squaring result: Верно");   
        } else {
            console.log("1) Squaring result: Неверно");
        };
        
    };

    valueCondition();

    // 2) Boolean condition
    function booleanCondition() {
        console.log("2) Boolean condition:");
        let test = true;
        for (let i = 1; i <= 2; i++) {
            console.log(` .${i}) if test = ${test}:`);
            if (test) {
                console.log("     Верно");   
            } else {
                console.log("     Неверно");
            };
            
            if (!test) {
                console.log("     Верно");   
            } else {
                console.log("     Неверно");
            }; 

            test = false;
        };
        
    
    };


    booleanCondition();

    // 3) Purchase sum with sale 
    function sumWithSale() {
        
        let sum = prompt("Введите сумму покупки:");
        sum = Number(sum);
        let sale;
        if (sum > 500 && sum < 800) {
            sale = 0.03;
        } else if (sum > 800) {
            sale = 0.05;
        } else {
            sale = 0;
        };
        sum = sum - (sum * sale);
        let viewSale = sale * 100;
        alert(`Сумма покупки с учетом скидки - ${viewSale}% составляет: ${sum} грн.`);
        console.log(`3) Purchase sum with sale ${viewSale}% : ${sum} uah.`);
    }

    sumWithSale();

};

conditionTasks();

// Loops Tasks:
function loopsTasks() {
    console.log("\nLoops Tasks:\n\n");
    

};

loopsTasks();


// Function Task isAdult:
function isAdult() {
    console.log("\nFunction Task isAdult:\n\n");

}

isAdult();