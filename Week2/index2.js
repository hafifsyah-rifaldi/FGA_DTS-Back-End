class VariabelError extends Error{
    constructor(message){
        super(message);
        this.name = "Error di variabel";
    }
}

let json = '{"age": 20}';

try {
    let user = JSON.parse;
    if(!user.name) {
        throw new VariabelError("`name` is required.");
    }
        console.log(user.name);
        console.log(user.age);
 } catch (error) {
    if (error instanceof VariabelError){
    console.log("Syntax error: " + error.name);
    } else {
        console.log(error.message);
    }
}