class ViewController {

    constructor() {
        window.addEventListener('load', this.handleHashChange);
        window.addEventListener('hashchange', this.handleHashChange);

    }

    handleHashChange = () => {
        const pageIds = ['login', 'register', 'home'];

        
        let hash = location.hash.slice(1) || pageIds[0];

        if(hash === 'home') {
            if(!userManager.loggedUser) {
                location.hash = 'login';
                return; 
            }
        } else if(hash === 'login'){
            if(userManager.loggedUser){
                location.hash = 'home';
                return;
            }
        }
        
        pageIds.forEach(pageId => {
            let element = document.getElementById(pageId);
            if(pageId === hash) {
                element.style.display = 'flex';
            } else {
                element.style.display = 'none';
            }
        })

        switch(hash) {

            case 'login':
                this.renderLogin();
            case 'home':
                this.renderHomePage(userManager.users);
        }

    }

    renderLogin = () => {


        let form = document.getElementById('loginForm');

        form.onsubmit = (e) => {
            e.preventDefault();
            let username = e.target.elements.username.value.trim();
            let pass = e.target.elements.pass.value.trim();
            

            
            let successfullLogin = userManager.login({username, pass});

        }

        let register = document.getElementById('registerForm');

        register.onsubmit = (e) => {
            e.preventDefault();
            let username = e.target.elements.username.value.trim();
            let pass = e.target.elements.pass.value.trim();
            let confirm = e.target.elements.confirm.value.trim();

            if(pass.length > 5 && pass === confirm){
            let successfullRegistration = userManager.createUser({username, pass, confirm});
            }
        }
    }

    renderHomePage = (users) => {
        let home = document.getElementById('home');
        home.innerHTML = "";
       

        users.forEach((user) => {
            let profile = document.createElement("div");
            profile.style.background = "yellow";
            profile.style.color = "red";
            profile.style.width = "200px";
            profile.style.height = "200px";
            profile.style.margin = "10px 20px"
            profile.style.display = "inline";

            let userName = document.createElement("h1");
            userName.innerText = user.username;
            

            let userPass = document.createElement("h3");
            userPass.innerText = user.pass;
            

            profile.append(userName, userPass);

            home.appendChild(profile);
        })
    }
    
}

let viewController = new ViewController();
