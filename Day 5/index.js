let student = {};


let quizQuestions = [
  { q: "What is 2 + 2?", options: ["3","4","5"], answer: "4" },
  { q: "Which planet is called Red Planet?", options: ["Mars","Earth","Jupiter"], answer: "Mars" },
  { q: "Which language runs in the browser?", options: ["Python","JavaScript","C++"], answer: "JavaScript" },
  { q: "What is 10 - 4?", options: ["5","6","7"], answer: "6" },
  { q: "Capital of India?", options: ["Delhi","Mumbai","Chennai"], answer: "Delhi" },
  { q: "What is 5 × 3?", options: ["15","10","20"], answer: "15" }
];


function register() {
  try {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = parseInt(document.getElementById("age").value);

    if (!name || !email || !age) throw " All fields are required!";
    if (age < 12) throw " Age must be 12 or above!";


    student = { name, email, age };


    document.getElementById("registration").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");

    loadQuiz();
  } catch(err) {
    document.getElementById("regError").textContent = err;
  }
}


function loadQuiz() {
  let selected = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 3);
  let qDiv = document.getElementById("questions");
  qDiv.innerHTML = "";

  selected.forEach((q, i) => {
    let block = `<p><b>Q${i+1}: ${q.q}</b></p>`;
    q.options.forEach(opt => {
      block += `<label><input type="radio" name="q${i}" value="${opt}"> ${opt}</label><br>`;
    });
    qDiv.innerHTML += block;
  });

  student.selectedQuestions = selected;
}

function submitQuiz() {
  let form = document.getElementById("quizForm");
  let score = 0, answers = [];

  student.selectedQuestions.forEach((q,i) => {
    let selected = form[`q${i}`].value;
    answers.push({ question:q.q, selected, correct:q.answer });
    if (selected === q.answer) score++;
  });

  student.answers = answers;
  student.score = score;
  student.percentage = Math.round((score/3)*100);


  if (student.percentage >= 80) student.grade = "A";
  else if (student.percentage >= 60) student.grade = "B";
  else if (student.percentage >= 40) student.grade = "C";
  else student.grade = "D";

  student.timestamp = new Date().toString();


  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("summary").textContent = " Calculating result...";

  new Promise(resolve => {
    setTimeout(() => {
    
      let reducedData = {
        name: student.name,
        email: student.email,
        age: student.age,
        score: student.score,
        percentage: student.percentage,
        grade: student.grade
      };
      resolve(reducedData);
    }, 2500); 
  }).then(data => {
    document.getElementById("summary").innerHTML =
      ` Name: ${data.name}<br>
        Email: ${data.email}<br>
        Age: ${data.age}<br>
        Score: ${data.score}/3<br>
        Percentage: ${data.percentage}%<br>
        Grade: ${data.grade}`;

    document.getElementById("jsonOutput").textContent = JSON.stringify(data,null,2);
  });
}


function restart() {
  student = {};
  document.getElementById("registration").classList.remove("hidden");
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.add("hidden");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
  document.getElementById("regError").textContent = "";
}
