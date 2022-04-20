const container = document.querySelector('#container');

const content = document.createElement('p');
content.setAttribute('style', 'color: red;');
content.textContent = "Hey I'm red!";
container.appendChild(content);

const p3 = document.createElement('h3');
p3.setAttribute('style', 'color: blue;');
p3.textContent = "I'm blue h3!";
container.appendChild(p3);

const div = document.createElement('div');
div.setAttribute('id', 'newDiv');
container.appendChild(div);
const newDiv = document.querySelector('#newDiv');
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div";
newDiv.appendChild(h1);
const p = document.createElement('p');
p.textContent = "ME TOO!";
newDiv.appendChild(p);