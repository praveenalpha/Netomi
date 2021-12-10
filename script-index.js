let iframe = document.getElementById("f");

setTimeout(() => {
    iframe.contentWindow.document.querySelector("#b").addEventListener("click", () =>{
    let p_tag = document.querySelector("#p");
    let name = iframe.contentWindow.document.querySelector("#name").value;
    let email = iframe.contentWindow.document.querySelector("#email").value;
    let number = iframe.contentWindow.document.querySelector("#number").value;
    let state = iframe.contentWindow.document.querySelector("#state").value;
    let country = iframe.contentWindow.document.querySelector("#country").value;
    let msg = "You Logged in !!";
    if(name.length < 4 || name.length > 10){
        msg = `"{Name:{"error":"length should be between 4 to 10 charecters"}}`;
    }
    if(number.length != 10){
        msg = `"{Contact Number:{"error":"length should be 10 digits"}}`;
    }
    if(state.length == 0){
        msg = `"{State:{"error":"State is Mendatory"}}`;
    }
    if(country.length == 0){
        msg =  `"{Country:{"error":"Country is Mendatory"}}`;
    }
    console.log(email.charAt(email.length-4));
    console.log(email.charAt(email.length-3));
    
    if(email.indexOf('@') <= 0){
        msg = `"{email:{"error":"email must not start with @"}}`;
    }
    if((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.')){
        msg = `"{email:{"error":"email must have . at 2nd or 3rd last"}}`;
    }
    p_tag.innerHTML = msg;
     
 })

}, 1000);