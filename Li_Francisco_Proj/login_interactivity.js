//variable declarations and value assignments
let userval = 0;
let passval = 0;
//function when the "Login" button is pressed
document.getElementById("login_button").onclick = function verification() {
    //assigning values inside the infoboxes to the variables
    userval = document.getElementById("userbox").value;
    passval = document.getElementById("passbox").value;
    //conversion of empty strings ("") into the value "undefined"
    userval = userval || undefined;
    passval = passval || undefined;
    //if both username and password values are "undefined"
    if(userval == undefined && passval == undefined ) {
        document.getElementById("text_rem").innerHTML = "Please enter your username and password."
        console.log("Login error.")
    };
    //if only the password value is "undefined"
    if(userval !== undefined && passval == undefined) {
        document.getElementById("text_rem").innerHTML = "Please enter your password."
        console.log("Login error.")
    };
    //if only the username value is "undefined"
    if(userval == undefined && passval !== undefined) {
        document.getElementById("text_rem").innerHTML = "Please enter your username."
        console.log("Login error.")
    };
    //if neither the username nor password values are "undefined"
    if(userval !== undefined && passval !== undefined) {
        location.replace("Li_Francisco_2qProj/index.html")
    };
};