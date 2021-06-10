const rootElement = document.getElementById('rootElement');

const users = [
    {name: 'John Doe', signup: '2/2/2021', email: 'john@gmail.com'},
    {name: 'Sara Smith', signup: '2/2/2021', email: 'sara@gmail.com'},
    {name: 'Kendall Kim', signup: '2/2/2021', email: 'kendall@gmail.com'},
];

const getUserTemplate = (props) => {
    return `
        <div class="card">
            <h4>${props.name}</h4>
            <p>Signup Date: ${props.signup}</p>
            <p>Email: ${props.email}</p>
        </div>
    `;
};

const renderUser = (user) => {
    rootElement.innerHTML = '';
    const userTemplates = users.map((user) => {
        getUserTemplate(user);
    }).join('');
    rootElement.insertAdjacentHTML('beforeend', userTemplates);
}