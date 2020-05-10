const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState);
            if(request.readyState === 4 && request.status === 200){
                const data = JSON.parse(request.responseText);  //JSON = JavaScriptObjectNotation
                resolve(data);
            } else if(request.readyState === 4){
                reject ('error getting resource');
            }
        });

        request.open('GET', resource);
        request.send();
    });

    // const request = new XMLHttpRequest();

    // request.addEventListener('readystatechange', () => {
    //     //console.log(request, request.readyState);
    //     if(request.readyState === 4 && request.status === 200){
    //         const data = JSON.parse(request.responseText);  //JSON = JavaScriptObjectNotation
    //         callback(undefined, data);
    //         //console.log(request, request.responseText);
    //     } else if(request.readyState === 4){
    //         callback('Cound not fetch data', undefined);
    //         //console.log('Could not fetch the data');
    //     }
    // });

    // //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    // //request.open('GET', 'todos.json');
    // request.open('GET', resource);
    // request.send();
};

getTodos('luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getTodos('mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('shaun.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});


// fetch API

fetch('luigi.json').then((response) => {
    // console.log('resolved', response);
    return response.json();
}).then(data => {
    console.log('fetch resolved', data);
}).catch((err) => {
    console.log('rejected', err);
});

// async & await

const getTodos2 = async () => {
    
    const response1 = await fetch('luigis.json');

    if(response1.status !== 200){
        throw new Error('cannot fetch the data');
    };

    const data1 = await response1.json();
    console.log('await 1 resolved', data1);
    const response2 = await fetch('mario.json');
    const data2 = await response2.json();
    console.log('await 2 resolved', data2);
    const response3 = await fetch('shaun.json');
    const data3 = await response3.json();
    console.log('await 3 resolved', data3);

    return data1;
};

getTodos2()
    .then(data => console.log('advanced await resolved:', data))
    .catch(err => console.log('advanced await rejected:', err.message));



// ****************************** OLDER NOTES ******************************

// console.log(1);
// console.log(2);


// nesting callback within callback within callback = callback hell
// getTodos('luigi.json', (err, data) => {
//     console.log('callback fired');
//     console.log(data);
//     getTodos('mario.json', (err, data) => {
//         console.log(data);
//         getTodos('shaun.json', (err, data) => {
//             console.log(data);
//         });
//     });

//     //console.log(err, data);
//     // if(err){
//     //     console.log(err);
//     // } else {
//     //     console.log(data);
//     // }
// });

// console.log(3);
// console.log(4);


// const getSomething = () => {

//     return new Promise((resolve, reject) => {
//         // fetch something (either resolve or reject)
//         resolve('some data');
//         reject('some error');
//     });
// };

// // getSomething().then((data) => {
// //     console.log(data);
// // }, (err) => {
// //     console.log(err);
// // });

// getSomething().then(data => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
//});