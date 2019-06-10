class Auth {
    constructor() {
        this.authenticated = false;
        this.admin = false;
    }

    login(cb) {
        var sessionData = JSON.parse(sessionStorage.getItem('data'));
        if(sessionData.username !== "" || sessionData.username !== null){
            this.authenticated = true;
            if (sessionData.admin === true){
                console.log("admin user");
                this.admin = true;
                cb();
            }
        }
    }

    logout(cb) {
        this.authenticated = false;
        this.admin = false;
        sessionStorage.clear();
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }

    isAdmin(){
        return this.admin;
    }
}

export default new Auth()