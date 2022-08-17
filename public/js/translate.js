function translateAbout() {
    var langauage = document.getElementById("languages").value;

    var request = new XMLHttpRequest();
    request.open("POST", "https://kuobo8gmpf.execute-api.us-east-1.amazonaws.com/default/translate", true); 
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        var payload = {langauge:langauges};
        console.log("translated");
        translatedText = JSON.parse(request.responseText);
        console.log(translatedText);
    };
    request.send(JSON.stringify(payload));
}
