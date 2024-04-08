function q2(){
  if(B5.checked == true){
    span2.textContent = "Correct!";
    score = score + 1;
  }
  else{
    span2.textContent = "Wrong!"
    score = score - 1;
  }
}
button2.onclick = q2;