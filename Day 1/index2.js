let name = prompt("Enter your name:");
let a=true;
while (a === true) {
    let y = Number(prompt("Enter your age:"));
    if (y >= 18) {
        alert("Hello " + name + ", you are eligible to vote ");
    } else if (y < 18) {
        alert("Sorry " + name + ", you are not eligible to vote ");
    }
    a=confirm("Do you want to check again?");
    if(a===false){
        alert("Goodbye!");
        break;
    }
}

let x = prompt("Enter your username:");
let y = prompt("Enter your password:");
let z;

if(x==="library" && y==="book123"){
    let a=confirm("Do you want to borrow a book?");
    if(a===true){
        z=Number(prompt("1 = Fiction, 2 = Science, 3 = History"));
        switch(z){
            case 1:
                alert("You selected Fiction");
                break;
            case 2:
                alert("You selected Science");
                break;
            case 3:
                alert("You selected History");
                break;
        }
    }else{
        alert("Maybe next time! Goodbye!");
    }

}
else{
    alert("Invalid login!");
}