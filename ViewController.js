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
                this.renderHomePage();
        }

    }

    renderLogin = () => {


        let form = document.getElementById('loginForm');

        form.onsubmit = (e) => {
            e.preventDefault();
            let username = e.target.elements.username.value;
            let pass = e.target.elements.pass.value;

            let successfullLogin = userManager.login({username, pass});

        }

        let register = document.getElementById('registerForm');

        register.onsubmit = (e) => {
            e.preventDefault();
            let username = e.target.elements.username.value;
            let pass = e.target.elements.pass.value;
            let confirm = e.target.elements.confirm.value;

            let successfullRegistration = userManager.createUser({username, pass, confirm});
        }
    }

    renderHomePage = () => {
        
    }
    
}

let viewController = new ViewController();
