let hypotenuse;
let answer = document.getElementById("answer").innerHTML;
let first = 1;
let second = 1;

function findHypotenuse() {

    // Смотрим какие числа ввёл пользователь
    first = document.forms["numbers"]["first"].value;
    second = document.forms["numbers"]["second"].value;

    // Находим гипотенузу, но пока без корня
    hypotenuse = first ** 2 + second ** 2;

    // Смотрим целое ли число в длине гипотенузы, если нет, то не возводим в квадратный корень, а просто добавляем знак корня
    if(Number.isInteger(Math.sqrt(hypotenuse)) == true) {
        document.getElementById("answer").innerHTML = "Ответ: " + Math.sqrt(hypotenuse);
    } else {
        document.getElementById("answer").innerHTML = "Ответ: √" + hypotenuse;
    }
    
}

function random() {
    first = 1;
    second = 1;
    hypotenuse = 0.1;

    // Цикл будет перебирать числа до тех пор, пока значение гипотенузы не будет целым числом
    while(Number.isInteger(hypotenuse) == false) {
        first = 1;
        second = 1;

        // Берутся рандомные числа от 0 до 1000
        first = Math.floor(Math.random() * 1000);
        second = Math.floor(Math.random() * 1000);

        // Избавляемся от нулей
        if(first == 0 || second == 0) {
            first = 1;
            second = 1;
        } else {
            hypotenuse = Math.sqrt(first ** 2 + second ** 2);
        }
        
    }
    document.forms["numbers"]["first"].value = first;
    document.forms["numbers"]["second"].value = second;
}