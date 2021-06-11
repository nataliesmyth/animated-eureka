const rootElement = document.getElementById('rootElement');
// const usersBtn = document.getElementById('users')
// const postsBtn = document.getElementById('posts')

const users = [
    {name: 'John Doe', signup: '2/2/2021', email: 'john@gmail.com'},
    {name: 'Sara Smith', signup: '2/2/2021', email: 'sara@gmail.com'},
    {name: 'Kendall Kim', signup: '2/2/2021', email: 'kendall@gmail.com'},
];

const posts = [
    {title: 'Post 1', date: '2/2/2021', content: 'lorem ipsum'},
    {title: 'Post 2', date: '2/2/2021', content: 'lorem ipsum'},
    {title: 'Post 3', date: '2/2/2021', content: 'lorem ipsum'},
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

const getPostTemplate = (props) => {
    return `
        <div class="card">
            <h4>${props.title}</h4>
            <p>Date: ${props.date}</p>
            <p>${props.content}</p>
        </div>
    `;
};

const renderUsers = (usersArray) => {
    rootElement.innerHTML = '';

    const userTemplates = usersArray.map((user) => {
        return getUserTemplate(user);
    }).join('');
    
    console.log(userTemplates)

    rootElement.insertAdjacentHTML('beforeend', userTemplates);
}

const renderPosts = (postsArray) => {
    rootElement.innerHTML = '';

    const postTemplates = postsArray.map((post) => {
        return getPostTemplate(post);
    }).join('');
    
    console.log(postTemplates)

    rootElement.insertAdjacentHTML('beforeend', postTemplates);
}

// EVENTS
usersBtn.addEventListener('click', () => {
    renderUsers(users);
});

postsBtn.addEventListener('click', () => {
    renderPosts(posts);
});