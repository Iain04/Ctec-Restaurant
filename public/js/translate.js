const element = document.getElementById("aboutText");
const language = document.querySelector("#selectLan");

function translateAbout() {
    console.log(language);
    var request = new XMLHttpRequest();
    request.open("POST", "https://kuobo8gmpf.execute-api.us-east-1.amazonaws.com/default/translate", true); 
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        console.log("translated");
        element.innerHTML = JSON.parse(request.responseText);
    };
    request.send(JSON.stringify({language:language}));
}
