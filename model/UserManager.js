class User {
    constructor(user, pass) {
      this.username = user, 
      this.pass = pass;
    }
  }
  
  class UserManager {
    constructor() {
      
      let loggedUser = JSON.parse(localStorage.getItem("isThereUser"));  
      if (loggedUser) {
        this.loggedUser = new User(loggedUser.username, loggedUser.pass);
      }  
    }
  
    loggedUser = null;
    users = JSON.parse(localStorage.getItem("users")) || [];
  
    createUser = ({ username, pass, confirm }) => {
      let newUser = this.users.find((user) => user.username === username);
      let name = username;
      let password = pass;
      let confirmPass = confirm;
    
        
        let registerButt = document.getElementById("registerButt");
        let registrationPopUp = document.getElementById("registrationPopUp");
        let message = document.getElementById('regPopUp');

        
  
      if (!newUser) {
        this.users.push(new User(name, password));
        localStorage.setItem('users', JSON.stringify(this.users));
      } else {
        openRegPopUp = () => {
            registrationPopUp.style.display = "inline-block";
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
        return true;
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