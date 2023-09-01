console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(a: number) {
    return function (b: number) {
        return a + b;
    };
}

console.log(sum(3)(6));
// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
function makeCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
const counter2 = makeCounter();
counter2(); // 1
counter(); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

function makeCounter1(startValue1: number) {
    let count = startValue1 || 0;

    return {
        increase: function () {
            count++;
            return count;
        },
        decrease: function () {
            count--;
            return count;
        },
        reset: function () {
            count = 0;
            return count;
        },
        set: function (value: number) {
            count = value;
            return count;
        }
    };
}

const counter1 = makeCounter1(5);
counter1.decrease()
// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

function superSum(n: number) {
    if (n === 0) return 0;

    return function helper(...args: number[]) {
        if (args.length >= n) {
            args.length = n;
            return args.reduce((acc, number) => acc + number);
        } else {
            return (...nextArgs: number[]) => helper(...args, ...nextArgs);
        }
    };
}

// @ts-ignore
console.log(superSum(0)) //0
// @ts-ignore
console.log(superSum(3)(2)(5)(3)) //10
// @ts-ignore
console.log(superSum(3)(2)(5, 3)) //10
// @ts-ignore
console.log(superSum(3)(2, 5, 3)) //10
// @ts-ignore
console.log(superSum(3)(2, 5)(3)) //10
// @ts-ignore
console.log(superSum(3)(2, 5)(3, 9)) //10


// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//task 5.1:
const sumTo = (n: number) => { //for
    let acc = 0
    for (let i = 1; i <= n; i++) {
        acc += i
    }
    return acc
}
sumTo(10)

const sumToRecursion = (n: number): number => {
    if (n > 1) {
        return n + sumToRecursion(n - 1)
    } else {
        return 1
    }
}
console.log(sumToRecursion(100))

const sumToArithmeticProgression = (n: number): number => {
    return (n * (n + 1)) / 2;
};
console.log(sumToArithmeticProgression(100))

//task 5.2:
const factorial = (n: number): number => {
    if (n > 1) {
        return n * factorial(n - 1)!
    } else {
        return 1
    }
}
console.log(factorial(5))

//task 5.3:

const fib = (n:number) => {
    if (n < 2) {
        return n;
    }

    let prevPrev = 0;
    let prev = 1;
    let current = 0;

    for (let i = 2; i <= n; i++) {
        current = prev + prevPrev;
        prevPrev = prev;
        prev = current;
    }

    return current;
};
console.log(fib(77))

//task 5.4

type objType = {
    value: number;
    next: objType | null;
};

function printList(list: objType | null): void {
    while (list) {
        console.log(list.value);
        list = list.next;
    }
}

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListRecursion(list: objType): void {
    console.log(list.value)
    if(list.next){
        printListRecursion(list.next)
    }
}

printListRecursion(list)
printList(list);


// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

// just a plug
export default () => {
};