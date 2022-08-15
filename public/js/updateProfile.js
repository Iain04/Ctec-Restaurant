function encode() {
    var selectedfile = document.getElementById("profilePic2").files;
    if (selectedfile.length > 0) {
        var imageFile = selectedfile[0];
        var fileReader = new FileReader();
        fileReader.onload = function(fileLoadedEvent) {
            profilePic = fileLoadedEvent.target.result;
            console.log(profilePic);
            document.getElementById('targetImg').src = profilePic;

        }
        fileReader.readAsDataURL(imageFile);
    }
}

function update() {
    var request =  new XMLHttpRequest();
    request.open("PUT", "http://127.0.0.1:8080/user", true);
    request.setRequestHeader("Content-Type","application/json");
    request.onload = function() {
        console.log(request.responseText);
        alert("Successfully update your profile")

    }
    username1 = document.getElementById("inputUsernameUser").value;
    contactNo1 = document.getElementById("inputContactUser").value;
    addressNo1 = document.getElementById("inputAddressUser").value;

    console.log(username1, contactNo1, addressNo1);
    var payload = {username:username1, contactUser:contactNo1, profilePic:profilePic, address:addressNo1, token:token};
    sessionStorage.setItem('profilePic', profilePic);
    console.log(payload);
    request.send(JSON.stringify(payload))
}