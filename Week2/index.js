class User{
    constructor(username,password){
        this.username = username;
        this.password = password;
    }
    login() {
        if (this.password === "12345"){
            return `Berhasil login dengan username ${this.username}`;
        }else {
            return `Gagal Login`;
        }
    }
}


class Admin extends User{
    users = [];
    constructor(username,password,level) {
        super(username,password);
        this.level = level;
        
    }
    addUser(username){
        this.users.push(username);
    }
    getUser(){
        return this.users;
    }
   /*  login(){
        return `Berhasil Login, karena status anda admin`;
    } */ }

const Budi = new Admin("budi","12345");
console.log(Budi.login());
Budi.addUser("Johan");
Budi.addUser("Faisal");

console.log(Budi.getUser()); 



/* class User{
    #password;
    constructor(username) {
        this.username = username;
        this.#password = "123456";
    }
}

const Budi = new User("Budi");
console.log(Budi.#password); */