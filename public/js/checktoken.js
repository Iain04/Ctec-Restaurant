$(document).ready(function () {

    var token = sessionStorage.getItem("token");
    var username = sessionStorage.getItem("username");
    var profilePic = sessionStorage.getItem("profilePic");
    if (token != null) {
        $('#signin-btn').hide();
        $('#dropdown-menu').show();
        $('#newReview').show(); 

        document.getElementById('profile-picture').src = profilePic;
        document.getElementById('profile-username').textContent = username;
    }
      
})
