class User {
    constructor(user, pass){
        this.username = user,
        this.pass = pass
    }
}

class UserManager {

    loggedUser = null;
    users = [new User ('Nik', 'test'), new User ('Clara', 'kod')];

    showAlert = () => {
        alert("Wrong username ot password!")
    };

    

    createUser = (username) =>{
        let newUser = this.users.find(user => user.username === username);

        if(!newUser){
            this.allUsers.push(newUser);
        }
    }

    login = ({username, pass}) => {
        let foundUser = this.users.find(user => user.username === username && user.pass === pass);

        if (foundUser){
            this.loggedUser = foundUser;
            let headingUser = document.getElementById('user');
            headingUser.innerText = this.loggedUser.username;
            return true;
        } else {
            userManager.showAlert();
        }

        return false;
    }
}

let userManager = new UserManager();