$(document).ready(function(){

    var request = new XMLHttpRequest();
    
    request.open("POST", "http://127.0.0.1:8080/member", true);
    request.setRequestHeader("Content-Type","application/json");
    request.onload = function(){
        console.log(request.responseText);
        var profile = JSON.parse(request.responseText)
        profilePic = profile[0].profilePic;
        contactNo = profile[0].contactUser;
        addressNo = profile[0].address;
        username = profile[0].username;
        document.getElementById('inputUsernameUser').value = username;
        document.getElementById('inputContactUser').value = contactNo;
        document.getElementById('inputAddressUser').value = addressNo;
        document.getElementById('targetImg').src = profilePic;
    }

    var payload = {token: token};
    request.send(JSON.stringify(payload));

})