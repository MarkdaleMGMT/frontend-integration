class Auth {
    constructor(){
        this.isAuthenticated = false;
    }

    login(cb) {
        var sessionData = JSON.parse(sessionStorage.getItem('data'));
        if (sessionData.username !== "" || sessionData.username !== null) {
            this.isAuthenticated = true;
        }
        else{
            this.isAuthenticated = false;
        }

        cb();
    }

    getAuth() {
        return this.isAuthenticated;
    }


    // logout(cb) {
    //     this.authenticated = false;
    //     this.admin = false;
    //     sessionStorage.clear();
    //     cb();
    // }
}

export default new Auth()