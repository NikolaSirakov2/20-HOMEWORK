class User {
    constructor(name, password){
        this.name = name,
        this.password = password
    }
}

class UserManager {

    logedUser = null;
    allUsers = [{name: 'Nik', password: 'test'}, {name: 'Clara', password: 'kod'}];

    createUser = () =>{

    }

    logInUser = (name, password) => {
        let existingUser = this.allUsers.filter(user => user.name === name && user.password === password);

        if (existingUser){
            
        }
    }
}

let userManager = new UserManager();