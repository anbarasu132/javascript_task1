let num1 = "5"
let x=Number(num1)

if(x%2==0)
{
    console.log("even")
}
else{
    console.log("odd")
}
let day = 6

switch(true){
    case(day>=1 && 5>=day):
    {
    console.log("It's a Weekday")
    break
    }
    case(day>=6 && 7>=day):
    {
        console.log("It's the weekend")
        break
    }
    default:
    {
        console.log("Invalid day")
    }
}
