const userAPI = 'https://62ebe240705264f263e2c5b2.mockapi.io/api/1/usersBW'

location.href.includes('/form.html?create') && createUserForm(userAPI);

location.href.includes('/form.html?update') && updateUserForm(userAPI);

document.querySelector('#login').addEventListener('click',(e)=>{
    e.preventDefault();
    if (document.querySelector('#username-login').value == 'Admin'){
        location.href = 'admin.html';
    }
})
