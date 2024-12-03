// Q1
function greetUser(name) {
    document.getElementById("output").innerText = `Hello, ${name}!`;
  }
  greetUser("Amine");
  
  // Q2
  function changeText() {
    document.getElementById("message").innerText = "Hello, World!";
  }
  
  // Q3 
  function addNumbers() {
    const num1 = document.getElementById("number1").value;  
    const num2 = document.getElementById("number2").value;
    const sum = (Number(num1) + Number(num2));
    document.getElementById("result").innerText = `Result: ${sum}`;
  }

  // Q4
  function updateTitle() {
    const newText = document.getElementById("inputField").value;
    document.getElementById("title").innerText = newText;
  }
  
  // Q5
  
  function concatenateStrings() {
    const str1 = document.getElementById("string1").value;
    const str2 = document.getElementById("string2").value;
    document.getElementById("combinedText").innerText = str1 + " " + str2;
  }
  
  // Q6
  document.getElementById("changeBgButton").addEventListener("click", function () {
    document.getElementById("colorBox").style.backgroundColor = "blue";
  });