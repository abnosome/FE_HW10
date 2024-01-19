
const numbers = [8, -10, 17, -99, 0];


//Создайте массив чисел и используйте метод map, чтобы удвоить каждый элемент.
const doubledNum = numbers.map(number => number * 2);
console.log(doubledNum);

//Создайте массив чисел и используйте метод forEach, чтобы вычислить сумму всех элементов.
let sum = 0;
numbers.forEach(number => {
    sum += number;
});
console.log(sum);

//Создайте массив чисел и используйте метод filter, чтобы удалить все отрицательные числа.
const posNums = numbers.filter(number => number >= 0);
console.log(posNums);

//Создайте массив строк и используйте метод map, чтобы преобразовать все строки в верхний регистр.
const str = ['hi','hej','hallo','bonjour'];
const upperCaseStr = str.map(words => words.toUpperCase());
console.log(upperCaseStr);