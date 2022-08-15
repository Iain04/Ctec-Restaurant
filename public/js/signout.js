function signoutUser() {
    $('#signin-btn').show();
    $('#dropdown-menu').hide();
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("profilePic");
    window.location.reload();
}