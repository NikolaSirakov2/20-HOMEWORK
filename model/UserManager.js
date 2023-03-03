class User {
    constructor(name, password){
        this.name = name,
        this.password = password
    }
}

class UserManager {

    loggedUser = null;
    allUsers = [new User ('Nik', 'test'), new User ('Clara', 'kod')];

    showAlert = () => {
        alert("Wrong username ot password!")
    };

    createUser = (name) =>{
        let newUser = this.allUsers.find(user => user.name === name);

        if(!newUser){
            this.allUsers.push(newUser);
        }
    }

    login = ({username, pass}) => {
        let foundUser = this.allUsers.find(user => user.username === username && user.pass === pass);

        if (foundUser){
            this.loggedUser = foundUser;
            return true;
        } 

        return false;
    }
}

