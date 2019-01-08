function inputBorder() {
  var pass = document.getElementById('password');
  var confPass = document.getElementById('confirmPassword');
  if(pass.value == confPass.value) {
    confPass.style.border = '3px solid green';
    pass.style.border = '3px solid green';
  }
  else if(pass.value != confPass.value){
    confPass.style.border = '3px solid red';
    pass.style.border = '3px solid red';
  }
}
