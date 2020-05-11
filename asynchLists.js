const jsonFiles = ['luigi.json', 'mario.json', 'shaun.json'];
const todosHandle = document.querySelector('.todos');
let todosNewContent = '';

// fetch content from json file (resource parameter) and format HTML content (formatTodos)
const getTodos = async (resource) => {
    const response = await fetch(resource);
    if(response.status !== 200){
        throw new Error('cannot fetch the data');
    };
    const data = await response.json();
    formatTodos(data);
    console.log('promise resolved:', data);
    return todosNewContent;  // return html formatted content
};

// format h2 header, list items & add to todosNewContent variable
const formatTodos = (data) => {
    todosNewContent += `<h2>${data[0].author}</h2>`;
    data.forEach(todo => todosNewContent += `<li>${todo.text}</li>`);
}

// cycle through each json file in jsonFiles array & add HTML content
jsonFiles.forEach(fileName => {
    getTodos(fileName)
        .then(todosNewContent => todosHandle.innerHTML = todosNewContent)
        .catch(err => console.log('advanced await rejected:', err.message));
});