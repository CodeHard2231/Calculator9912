let c = 0;
function add() {
  var nbr1, nbr2, sum;
  nbr1 = Number(document.getElementById("no").value);
  nbr2 = Number(document.getElementById("no1").value);
  sum = nbr1 + nbr2;
  document.getElementById("disp").textContent = sum;
}
function sub() {
  var nbr1, nbr2, sum;
  nbr1 = Number(document.getElementById("no").value);
  nbr2 = Number(document.getElementById("no1").value);
  sum = nbr1 - nbr2;
  document.getElementById("disp").textContent = sum;
}
function divi() {
  var nbr1, nbr2, sum;
  nbr1 = Number(document.getElementById("no").value);
  nbr2 = Number(document.getElementById("no1").value);
  sum = nbr1 / nbr2;
  document.getElementById("disp").textContent = sum;
}
function multi() {
  var nbr1, nbr2, sum;
  nbr1 = Number(document.getElementById("no").value);
  nbr2 = Number(document.getElementById("no1").value);
  sum = nbr1 * nbr2;
  document.getElementById("disp").textContent = sum;
}
