const list = document.querySelector('.directory-list');

function createNode(element) {
  return document.createElement(element);
}

function append(parent, element) {
  return parent.appendChild(element);
}

fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then(data => generateInfo(data))



function generateInfo(data) {
  let info = data.results;
  return info.map(function(info) {
    let div = createNode('div');
    let li = createNode('li');
    let img = createNode('img');
    img.src = info.picture.large;
    div.innerHTML = `
      <h3>${info.name.first} ${info.name.last}</h3>
      <p>${info.email}</p>
      <p>${info.location.city}</p>
    `;
    append(li, img);
    append(li, div);
    append(list, li);
    li.classList += 'card';
  })
}

//<div>
  //<h3>${info.name.first} ${info.name.last}</h3>
  //<p>${info.email}</p>
  //<p>${info.location.city}</p>
//</div>
//`
