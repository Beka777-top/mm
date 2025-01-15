function fetchUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Жүктеу қатесі');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Қате орын алды!', error);
            return [];
        });
}
function displayUsers(users) {
    const usersContainer = document.getElementById('users');
    usersContainer.innerHTML = '';

    users.forEach(user => {
        const userElement = document.createElement('div');
        userElement.classList.add('user-card');
        userElement.innerHTML = `
            <strong>Қолданушы аты:</strong> ${user.name} <br>
            <strong>Email:</strong> ${user.email}
        `;
        usersContainer.appendChild(userElement);
    });
}
fetchUsers().then(users => displayUsers(users));