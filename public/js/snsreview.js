function notification(){

    var notification = new XMLHttpRequest();
    console.log("notified")
    notification.open("POST", "https://qho62h7g7k.execute-api.us-east-1.amazonaws.com/default/snsreview",true);
    notification.setRequestHeader("Content-Type", "application/json");

    restaurantname = localStorage.getItem("restaurant-name");
    userid = sessionStorage.getItem("idUser");
    username = sessionStorage.getItem("username");
    reviewmessage = document.getElementById("userComments").value;
    notification.onload = function () {
        log = JSON.parse(notification.responseText);
        console.log(log);
    };
    var payload = {restaurantname:restaurantname,userid:userid,username:username,reviewmessage:reviewmessage};
    console.log(payload)
    notification.send(JSON.stringify(payload));

}
