class User {
  constructor(user, pass) {
    (this.username = user), (this.pass = pass);
  }
}

class UserManager {
  constructor() {
    console.log(JSON.parse(localStorage.getItem("isThereUser")));
    let loggedUser = JSON.parse(localStorage.getItem("isThereUser"));
    if (loggedUser) {
      this.loggedUser = new User(loggedUser.username, loggedUser.pass);
    }
    let headingUser = document.getElementById("user");
      headingUser.innerText = this.loggedUser.username;
      return true;
    
  }

  loggedUser = null;
  users = [new User("Nik", "test"), new User("Clara", "kod")];

  createUser = ({ username, pass, confirm }) => {
    let newUser = this.users.find((user) => user.username === username);
    let name = username;
    let password = pass;
    let confirmPass = confirm;

    if (!newUser && password === confirmPass) {
      this.users.push(new User(name, password));
    } else {
      let registerButt = document.getElementById("registerButt");
      let popup = document.getElementById("registrationPopUp");
      openPopUp = () => {
        popup.style.display = "inline-block";
      };

      registerButt.addEventListener("click", openRegPopUp());
    }
  };

  login = ({ username, pass }) => {
    let foundUser = this.users.find(
      (user) => user.username === username && user.pass === pass
    );

    if (foundUser) {
      this.loggedUser = foundUser;
      localStorage.setItem('isThereUser', JSON.stringify(this.loggedUser));
      
    } else {
      let loginButton = document.getElementById("loginButt");
      let popup = document.getElementById("loginPopUp");
      openPopUp = () => {
        popup.style.display = "inline-block";
      };

      loginButton.addEventListener("click", openPopUp());
    }

    return false;
  };
}

let userManager = new UserManager();
