function myFunction(event) {
    event.preventDefault();

    var phone_number = document.getElementById("cmp-otp_input").value;
    localStorage.setItem('phone-number',phone_number);
    sessionStorage.setItem('phone-number',phone_number);
}
function clickEvent(first,last){
    if(first.value.length){
        document.getElementById(last).focus();
    }
}
