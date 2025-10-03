let student = {}; 

function saveProfile() {
    try {
        const name = document.getElementById('name').value.trim();
        const birthYear = parseInt(document.getElementById('birthYear').value);
        const city = document.getElementById('city').value.trim();

        if (!name || !birthYear || !city || isNaN(birthYear)) {
            throw "⚠️ Please enter valid name, birth year, and city.";
        }

        student.name = name;
        student.birthYear = birthYear;
        student.city = city;

        document.getElementById('profileOutput').innerText =
            ` Profile saved: ${name} from ${city} (Born: ${birthYear})`;
    } catch (err) {
        document.getElementById('profileOutput').innerText = err;
    }
}


function checkAge() {
    try {
        if (!student.birthYear) throw "⚠️ Please save your profile first!";
        const currentYear = new Date().getFullYear();
        const age = currentYear - student.birthYear;
        student.age = age;

        let eligibility = age >= 18 ? " You are eligible (18+)" : " Not eligible (under 18)";
        document.getElementById('ageOutput').innerText = `Your age is ${age}. ${eligibility}`;
    } catch (err) {
        document.getElementById('ageOutput').innerText = err;
    }
}


function showGreeting() {
    const hour = new Date().getHours();
    let greet;
    if (hour < 12) greet = "Good Morning";
    else if (hour < 18) greet = "Good Afternoon";
    else greet = "Good Evening";

    const name = student.name ? student.name : "Student";
    document.getElementById('greetOutput').innerText = `${greet}, ${name}! `;
}

function calculate(op) {
    try {
        const n1 = parseFloat(document.getElementById('num1').value);
        const n2 = parseFloat(document.getElementById('num2').value);

        if (isNaN(n1) || isNaN(n2)) throw "⚠️ Enter valid numbers.";
        let result;
        switch (op) {
            case '+': result = n1 + n2; break;
            case '-': result = n1 - n2; break;
            case '*': result = n1 * n2; break;
            case '/':
                if (n2 === 0) throw "⚠️ Cannot divide by zero!";
                result = n1 / n2;
                break;
        }
        document.getElementById('calcOutput').innerText = `Result: ${result}`;
    } catch (err) {
        document.getElementById('calcOutput').innerText = err;
    }
}


const quotes = [
    " Believe in yourself and all that you are.",
    " The secret of getting ahead is getting started.",
    " Don’t watch the clock; do what it does. Keep going.",
    " Success is not in what you have, but who you are.",
    " Great things never come from comfort zones."
];

function showQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quoteOutput').innerText = quotes[randomIndex];
}
function showJSON() {
    try {
        if (Object.keys(student).length === 0) throw "⚠️ No data to display!";
        document.getElementById('jsonOutput').innerText =
            JSON.stringify(student, null, 4);
    } catch (err) {
        document.getElementById('jsonOutput').innerText = err;
    }
}

