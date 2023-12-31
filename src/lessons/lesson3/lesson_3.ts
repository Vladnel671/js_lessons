import axios from 'axios';

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA
// https://www.jsv9000.app/

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU

// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661

export const getRequest = () => {
    try {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                console.log('Response:', response.data);
            });
    } catch (error) {
        console.error('Error:', error);
    }
}

export const postRequest = () => {
    const data = {
        title: 'Example Title',
        body: 'Example body content',
        userId: 1
    };

    axios.post('https://jsonplaceholder.typicode.com/posts', data)
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

export const putRequest = () => {
    const data = {
        title: 'Updated Title',
        body: 'Updated body content',
        userId: 1
    };

    axios.put('https://jsonplaceholder.typicode.com/posts/1', data)
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
export const deleteRequest = () => {
    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => {
            console.log('Response:', response.data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
};
