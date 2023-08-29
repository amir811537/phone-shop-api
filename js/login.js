
//step1 add click handler with submit button
document.getElementById('Submitbtn').addEventListener('click',function(){
    //step2 get email adderss inside the input fild
    // always remember to use .value to the text from an input field
const emailField = document.getElementById('useremail');
const email =emailField.value;
// step3 get password 
// a. set id on the html Element
// B.get the Element
// C . get the value from the Element
const passwordField = document.getElementById('userpassword');
const password =passwordField.value;
console.log(password, email)

//step4 varify email and passowrd
if(email==='amirhossain.bc.75@gmail.com' && password ==='baaperbank123'){
   window.location.href='bank.html';

}
else{
    alert('vul password ba gmail disos !')
}

})