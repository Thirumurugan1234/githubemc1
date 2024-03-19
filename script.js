
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirm_password = document.getElementById('confirm_password').value;
  

    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        validateInputs();
    })
    const nameVal=name.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const confirm_passwordVal=confirm_password.value.trim();

    if(nameVal===""){
        setError(name,"username is required")
    }
    else{
        setSuccess(name)
    }
    if(emailVal===""){
        setError(email,"email is required")
    }
    else if(!validateEmail(emailVal)){
        setError(email,"please enter a valid email")

    }
    else{
        setSuccess(email)

    }

    if(passwordVal===""){
        setError(password,"Password  is required")
    }
    else if(passwordVal.length<8){
        setError(password,"password  start in Capital letter & must be atleast  8 characters long")
    }
    else{
        setSuccess(password)
    }

    if(confirm_passwordVal===""){
        setError(password,"Password  is required")
    }
    else if(confirm_passwordVal!==passwordVal){
        setError(confirm_passwordVal,"password does not match")
    }
    else{
        setSuccess(confirm_passwordVal)
    }
    
    


function setError(element,message){
    const inputgroup=element.parentElement;
    const errorElement=inputgroupGroup.getElementById('error')

    errorElement.innerText=message;
    formgroup.classlist.add('error')
    formgroup.classlist.remove('success')
}

function setSuccess(element,message){
    const inputgroup=element.parentElement;
    const errorElement=inputGroup.getElementById('error')

    errorElement.innerText=message;
    inputgroup.classlist.add('success')
    inputgroup.classlist.remove('remove')
}

const validateEmail=(email)=>{
    return String(email)
    .toLowerCase()
    .match(

        /\S+@\S+\.\S+/
    );

    
};