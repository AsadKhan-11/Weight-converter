var valueInput = document
  .getElementById("type")
  .addEventListener("input", enter);

function enter(e) {
  let lbs = e.target.value;

  document.getElementById("g-output").innerHTML = lbs / 453.6;
  document.getElementById("kg-output").innerHTML = lbs / 2.205;
  document.getElementById("o-output").innerHTML = lbs / 16;
}
