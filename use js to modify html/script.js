const container = document.querySelector('#container');

const content = document.createElement('div');
content.setAttribute('style', 'color: red;');
content.textContent = "Hey I'm red!";

container.appendChild(content)