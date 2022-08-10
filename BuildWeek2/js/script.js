const userAPI = 'https://62ebe240705264f263e2c5b2.mockapi.io/api/1/usersBW'

location.href.includes('/form.html?create') && createUserForm(userAPI);

location.href.includes('/form.html?update') && updateUserForm(userAPI);

location.href.includes('/form.html?userUpdate') && updateUserForm(userAPI);

document.querySelector('#login').addEventListener('click',(e)=>{
    e.preventDefault();

    let userLogin = document.querySelector('#username-login').value

    if (userLogin == 'Admin'){
        location.href = 'admin.html';
    }else{
        
        fetch(userAPI)
        .then(res => res.json())
        .then(res => {
            let id = res.find(element => element.username.toLowerCase() == userLogin.toLowerCase())
            id && (id = id.id)
            console.log(id);

            //location.href = 'form.html?update' + encodeURIComponent('&id=' + user.id);
            
        })
    }
})
