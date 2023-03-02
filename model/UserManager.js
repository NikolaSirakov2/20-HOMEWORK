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

    logInUser = ({name, password}) => {
        let existingUser = this.allUsers.find(user => user.name === name && user.password === password);

        if (existingUser){
            this.loggedUser = existingUser;
            return true;
        } else {
            this.showAlert();
            return false;
        }
    }
}

