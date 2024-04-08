function q3(){
  if(B11.checked == true){
    span3.textContent = "Correct!";
    score = score + 1;
  }
  else{
    span3.textContent = "Wrong!";
    score = score - 1;
  }
}
button3.onclick = q3;