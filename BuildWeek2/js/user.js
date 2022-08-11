const displayUserData = document.querySelector('div#user-data')

class UserData {
    constructor(target) {
        this.user = JSON.parse(sessionStorage.getItem('loggedUser')).user

        this.createData(target, 'username', 'firstName', 'lastName', 'email', 'phone', 'address')
        this.createButton(target)

    }


    createButton(target) {

        let div = document.createElement('div')
        div.className = 'mt-4 row justify-content-around'

        let btnUpdate = document.createElement('button')
        btnUpdate.className = 'btn btn-warning col-5'
        btnUpdate.innerHTML = 'Modifica'

        btnUpdate.addEventListener('click', () => {
            location.href = 'form.html?update' + encodeURIComponent('&id=' + this.user.id);
        })

        let btnDelete = document.createElement('button')
        btnDelete.className = 'btn btn-danger col-5'
        btnDelete.innerHTML = 'Elimina'

        btnDelete.addEventListener('click', () => {
            Table.deleteUser(this.user.id)
        })

        div.append(btnUpdate, btnDelete)

        target.append(div)
    }

    createData(target, ...elem) {

        for (let dataName of elem) {

            let p = document.createElement('p');

            switch (dataName) {
                case 'username':
                    p.innerHTML = 'Username: ' + this.user.username;
                    break;
                case 'firstName':
                    p.innerHTML = 'Nome: ' + (this.user.name.split(' '))[0].replaceAll('-', ' ')
                    break;
                case 'lastName':
                    p.innerHTML = 'Cognome: ' + (this.user.name.split(' '))[1].replaceAll('-', ' ')
                    break;
                case 'email':
                    p.innerHTML = 'Email: ' + this.user.email
                    break;
                case 'phone':
                    p.innerHTML = 'Telefono: ' + this.user.phone
                    break;
                case 'address':
                    p.innerHTML = 'Indirizzo: ';
                    if (this.user.address) {
                        for (let elem in this.user.address) {
                            p.innerHTML += this.user.address[elem] + ' ';
                        }
                    }
                    break;

            }

            target.append(p)
        }
    }

}

let data = new UserData(displayUserData);