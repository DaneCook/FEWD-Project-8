const container = document.querySelector('.container');
const index = 0;

// Obtain information from the Random User API
fetch('https://randomuser.me/api/?results=12')
  .then(response => response.json())
  .then(data => generateInfo(data))
  .catch(error => console.log("An unexpected error has occured", error))


// Loop through pulled data, add template literal for each employee with necessary data
function generateInfo(data) {
  const employees = data.results;
  employees.forEach(employee => {
    container.innerHTML += `
    <div class="card">
      <img src=${employee.picture.large}>
      <div>
        <h3>${employee.name.first} ${employee.name.last}</h3>
        <p>${employee.email}</p>
        <p>${employee.location.city}</p>
      </div>
    </div>
    `;
  })
  container.querySelectorAll('.card').forEach((card, index) => { //Add click event for each employee to create a modal window
    card.addEventListener('click', () => {
      generateModal(employees, employees[index], index);
    });
  });
};


//Creates modal window and adds data to it
function generateModal(employees, employee, index) {
  let modalContainer = document.querySelector('.modal-container');
  const dob = new Date(Date.parse(employee.dob.date)).toLocaleDateString(navigator.language);
    modalContainer.innerHTML =
        `<div class="modal">
          <div class="modal-info-top">
            <div>
              <span class="close">&times;</span>
            </div>
            <img src="${employee.picture.large}">
            <h3>${employee.name.first} ${employee.name.last}</h3>
            <p>${employee.email}</p>
            <p>${employee.location.city}</p>
          </div>
            <p>${employee.cell}</p>
            <p>${employee.location.street.number} ${employee.location.street.name}, ${employee.location.state} ${employee.location.postcode}</p>
            <p>Birthday: ${dob}</p>
         </div>`
       ;
    modalContainer.style.display = "block";
    const close = document.querySelector('.close'); // Closes modal window
    close.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    })
    modalContainer.addEventListener('click', () => {
      modalContainer.style.display = 'none';
    })
};
