function signinUser() {
    var request =  new XMLHttpRequest();
    request.open("POST", "http://ec2-54-236-85-44.compute-1.amazonaws.com:8080/login", true);
    request.setRequestHeader("Content-Type","application/json");
    request.onload = function() {
        $('#signup-modal').modal('hide');
        $('#signin-modal').modal('hide');
        user_array = JSON.parse(request.responseText);
        console.log(user_array);
        var error = user_array.result;
        if (error != "false") {
            var token = user_array[0].token;
            if (token.result != false) {
                alert("Successful Sign in.");
                document.getElementById("signin-btn").style.display="none";
                document.getElementById("dropdown-menu").style.display="block";
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("username", user_array[0].username);
                sessionStorage.setItem("profilePic", user_array[0].profilePic);
                sessionStorage.setItem("idUser", user_array[0]._id);
                window.location.reload();
            }
            else {
                alert("Failed to Sign in. Please try again later.");
            }
        }
        else {
            alert("Please input a valid email and password.");
        }
    }
    var email = document.getElementById("emailLogin").value;
    var password = document.getElementById("passwordLogin").value;
    var payload = {email:email, password:password};
    request.send(JSON.stringify(payload))
}
