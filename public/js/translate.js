const element = document.getElementById("aboutText");

function translateAbout(language) {
    console.log(language);
    var request = new XMLHttpRequest();
    request.open("POST", "https://kuobo8gmpf.execute-api.us-east-1.amazonaws.com/default/translate", true); 
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        console.log("translated");
        var translatedText = JSON.parse(request.responseText);
        console.log(translatedText);
    };
    request.send(JSON.stringify({language:language}));
}

element.innerHTML = translatedText;
