//string slicing//

//const fullName = "Deadbonez Allan";

//let fName = fullName.slice(0, 9);
//let lName = fullName.slice(10, 16);

//console.log(fName);
//console.log(lName);

//index.Of
//const fullName = "Nemzz Diddy";

//let firstNmae = fullName.slice(0, fullName.indexOf(" "));
//let lastNmae = fullName.slice(fullName.indexOf(" ") + 1);

//console.log(firstNmae);
//console.log(lastNmae);

/*const email = "mutieallan001@gmail.com";

let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(username);
console.log(extension);*/


           //method chaining
/* no method chaining
 let username = window.prompt("Enter username");
 
 username = username.trim();
 let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachars = username.slice(1);
extrachars = extrachars.toLowerCase();

username = letter + extrachars;

console.log(username);
*/


/*  with method chaining
let username = window.prompt("Enter name");

username = username.trim(). charAt(0). toUpperCase() + username.trim() . slice(1). toLowerCase();

console.log(username); */

/*while loop
let username  = "";
while (username === "" || username === null){
    username = window.prompt(`Enter username`);

}
console.log(`Hello ${username}`);



let loggedin = false;
let username;
let password;

while(!loggedin){
    username = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);
 
    if(username === "Deadbonez" && password === "myPassword"){
        loggedin = true;
        console.log(`You are logged in ${username}`);

    }else{
        console.log(`Invalid credentials`);
    }
}*/

/* for loop
for(let a = 1; a <= 15; a+=2){

    if(a === 13){
        continue;
    }else{
    console.log(a);
    }

    if(a === 9){
        break;
    }else{
        console.log(a);
    }
}
*/



/*funtions
function greetings(name,age){
    console.log(`Hello ${name}, you are ${age} years old`);
}

greetings("allan",20);

function add(a,b){
    let result = a+b;
    return result;
}

console.log(add(5,10));

function divide(a,b){
    return a/b;
}
console.log(divide(10,2));
 
function isEven(num){
    //tenary operator
    return num %2 === 0? true:false;
}
console.log(isEven(14));

function isEmailvalid(email){
    return email.includes("@")? true:false;
}
console.log(isEmailvalid("Allan123gmail.com"));

*/