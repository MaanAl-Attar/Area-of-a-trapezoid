document.getElementById("cal-btn").addEventListener("click", Calculate);

function Calculate() {
  let base1 = document.getElementById("b1-input").value;
  let base2 = document.getElementById("b2-input").value;
  let height = document.getElementById("h-input").value;

  let answer = (1/2 * ((base1) + (base2))) * (height)
  console.log(answer)

  document.getElementById("b1-input").value = " "
  document.getElementById("b2-input").value = " "
  document.getElementById("h-input").value = " "

  answer = answer.toFixed(2);
  
  document.getElementById("answer-output").innerHTML = answer;
  
}