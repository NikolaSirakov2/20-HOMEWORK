class User {
    constructor(name, password){
        this.name = name,
        this.password = password
    }
}

class UserManager {

    logedUser = null;
    allUsers = [{name: 'Nik', password: 'test'}, {name: 'Clara', password: 'kod'}];

    showAlert = () => {
        alert("Wrong username ot password!")
    };

    createUser = () =>{

    }

    logInUser = (name, password) => {
        let existingUser = this.allUsers.filter(user => user.name === name && user.password === password);

        if (existingUser){
            this.logedUser = {name: name, password: password};
        } else {
            this.showAlert();
        }
    }
}

let userManager = new UserManager();