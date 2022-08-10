const userAPI = 'https://62ebe240705264f263e2c5b2.mockapi.io/api/1/usersBW'
/*class Card {
    constructor(user) {

        this.div = document.createElement("div");
        this.div.className = "card col-12 col-sm-5 col-xl-3 col-xxl-2 bg-light";

        this.div.append(this.cardTitle(user));

        this.div.append(this.cardBody(user));
    }

    cardTitle(user) {

        let div = document.createElement('div');
        div.className = "card-body text-center bg-primary text-bg-primary rounded"

        let h5 = document.createElement('h5');
        h5.className = "card-title"
        h5.innerText = user.id + ' ' + user.username;

        div.append(h5)
        return div;
    }

    cardBody(user) {

        return this.createUl(`${user.name}`, user.email);
    }

    createUl(...arrString) {

        let ul = document.createElement('ul');
        ul.className = "list-group list-group-flush text-center rounded my-2"

        for (let string of arrString) {
            let li = document.createElement('li');
            li.className = "list-group-item bg-secondary text-bg-secondary";
            li.innerHTML = string;
            ul.append(li);
        }

        return ul;
    }
}

fetch(userAPI)
    .then(res => res.json())
    .then(users => {

        for (let user of users) {

            let card = new Card(user);

            target.append(card.div);
        }

    })*/

location.href.includes('/form.html') && createUserForm(userAPI);

document.querySelector('#login').addEventListener('click',(e)=>{
    e.preventDefault();
    if (document.querySelector('#username-login').value == 'Admin'){
        location.href = 'admin.html';
    }
})
