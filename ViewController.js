class ViewController {
  constructor() {
    window.addEventListener("hashchange", this.handleHashChange);
    window.addEventListener("load", this.handleHashChange);
    this.userManager = new UserManager();
  }

  handleHashChange = () => {
    let pageIds = ["login", "register", "home"];

    let hash = window.location.hash.slice(1) || pageIds[0];

    if(hash === "home"){
        if(!this.userManager.loggedUser){
            hash = 'login';
        }
    }

    pageIds.forEach((page) => {
      let element = document.getElementById(page);
      if (page === hash) {
        element.style.display = "flex";
      } else {
        element.style.display = "none";
      }
    });

    switch (hash) {
      case "login":
        this.renderLogin();
        break;
    }
  };

  renderLogin = () => {

    let form = document.getElementById("loginForm");

    form.onsubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        let name = e.target.elements.username.value;
        let password = e.target.elements.pass.value;

        let successfullLogin = this.userManager.login({name, password});
    }
  }
}

let viewController = new ViewController();
