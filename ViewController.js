class ViewController {

    constructor() {
        window.addEventListener('hashchange', this.handleHashChange);
        window.addEventListener('load', this.handleHashChange);
       
    }

    handleHashChange = () => {
        let pageIds = ["login", "register", "home"];

        let hash = window.location.hash.slice(1) || pageIds[0];

        pageIds.forEach(page => {
            let element = document.getElementById(page);
            if(page === hash){
                element.style.display = "flex";
            } else {
                element.style.display = "none";
            }
        })
    }
}

let viewController = new ViewController();