// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const p1 = new Promise((resolve, reject) => {
    console.log("Promise is created")
})
setTimeout(() => {
    console.log("Promise state:", p1);
}, 2000);

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const p2 = new Promise((resolve, reject) => {
    resolve("Promise Data")
})

p2.then((data) => {
    console.log(data)
})

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const p3 = new Promise((resolve, reject) => {
    reject("Promise Error")
})

p3.catch((error) => {
    console.log(error)
})

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Data")
    }, 3000)
})

p4.then(data => {
    console.log(data)
})

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

interface IHandlePromise {
    promise: any | null;
    resolve: any | null;
    reject: any | null;
    onSuccess: (paramName: any) => void;
    onError: (paramName: any) => void;
}


export const handlePromise: IHandlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: function (paramName: any) {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: function (paramName2: any) {
        console.log(`Promise is rejected with error: ${paramName2}`)
    }
}


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

const p6 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("My name is");
    }, 1000);
});

const onSuccess = (param: any) => {
    return param + " Vlad"
}

const print = (param2: any) => {
    console.log(param2)
    return param2
}

Promise.all([p6.then(onSuccess), p6.then(print)])
    .then(([result1, result2]) => {
        console.log(result1);
        console.log(result2);
    });

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}

const promise1: Promise<{ name: string }> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: "Anna"});
    }, 2000);
});

const promise2: Promise<{ age: number }> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({age: 16});
    }, 3000);
});

const promise3: Promise<{ city: string }> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({city: ''});
    }, 4000);
});

Promise.all([promise1, promise2, promise3])
    .then(([result1, result2, result3]: [{ name: string }, { age: number }, { city: string }]) => {
        const mergedResult = {...result1, ...result2, ...result3};
        console.log(mergedResult);
    })
    .catch(error => {
        console.error("An error occurred:", error);
    });


// just a plug
export default () => {
};