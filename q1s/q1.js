function q1(){
var score = 0;
if(B4.checked == true){
  span1.textContent = "Correct!";
  score = score + 1;
}
else{
  span1.textContent = "Wrong!";
  score = score - 1
}
  button.onclick = q1;