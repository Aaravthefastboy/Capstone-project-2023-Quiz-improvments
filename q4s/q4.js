function q4(){
if(B14.checked == true){
  span4.textContent = "Correct!";
  score = score + 1;
}
else{
  span4.textContent = "Wrong!";
  score = score - 1;
}
button4.onclick = q4;