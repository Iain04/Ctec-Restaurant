function showPicPreview() {
    var selectedfile = document.getElementById("profilePic").files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            var profilePicPreview = fileLoadedEvent.target.result;
            console.log(profilePicPreview);
            localStorage.setItem('profilePicPreview', profilePicPreview);
            document.getElementById('profilepicpreview').src = profilePicPreview;

        }
        fileReader.readAsDataURL(imageFile);
    }
}

function signupUser() {
    var request =  new XMLHttpRequest();
    request.open("POST", "http://ec2-54-166-17-19.compute-1.amazonaws.com:8080/user", true);
    request.setRequestHeader("Content-Type","application/json");
    request.onload = function() {
        $('#signup-modal').modal('hide');
        $('#signin-modal').modal('hide');
    }
    // firstName, username , email, gender, contactUser, profilePic, lastName, address, password

    var email = (document.getElementById("email").value) + '@gmail.com';
    var password = document.getElementById("password").value;
    var firstName = document.getElementById("firstName").value;
    var username = document.getElementById("username").value;
    var gender = document.getElementById("gender").value;
    var contactUser = document.getElementById("contactUser").value;
    var profilePic = localStorage.getItem("profilePicPreview");
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    if (profilePic == '') {
        profilePic = 'https://avisworldwide.com/wp-content/uploads/2020/05/blank-profile-picture-200x200-1.jpg'
    }
    if (email != '@gmail.com' && password != '' && firstName != '' && username != '' && gender != '' && contactUser != '' && address != '' && lastName != '') {
        var payload = {firstName:firstName, username:username, email:email, gender:gender, contactUser:contactUser, profilePic:profilePic, lastName:lastName, address:address, password:password};
        request.send(JSON.stringify(payload))
        alert("Successful Sign up");
    }
    else {
        alert("Please input fields correctly.");
    }

    
}
