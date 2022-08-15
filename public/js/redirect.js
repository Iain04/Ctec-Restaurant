$(document).ready(function () {

    var token = sessionStorage.getItem("token");
    var username = sessionStorage.getItem("username");
    var profilePic = sessionStorage.getItem("profilePic");
    if (token != null) {
        $('#signin-btn').hide();
        $('#dropdown-menu').show();

        document.getElementById('profile-picture').src = profilePic;
        document.getElementById('profile-username').textContent = username;


    } else {
        window.location.reload();
        window.location.href = "index.html";
    }
      
})