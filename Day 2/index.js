
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
