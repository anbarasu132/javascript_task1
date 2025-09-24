let num = "30"
let a = Number(num)

switch(true)
{
    case(a>90 && 100>=a):
    {
        console.log("Grade A")
        break
    }
    case(a>75 && 89>=a):
    {
        console.log("Grade B")
        break
    }
    case(a>50 && 74>=a):
    {
        console.log("Grade C")
        break
    }
    case(a<50):
    {
        console.log("fail")
        break
    }
}