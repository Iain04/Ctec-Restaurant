function translateAbout() {
    if (sessionStorage.getItem("language") != null) {
        var language = sessionStorage.getItem('language');

        var request = new XMLHttpRequest();
        request.open("POST", "https://kuobo8gmpf.execute-api.us-east-1.amazonaws.com/default/translate", true); 
        request.setRequestHeader("Content-Type", "application/json");
        request.onload = function () {
            console.log("translated");
            translatedText = JSON.parse(request.responseText);
            console.log(translatedText);
        };
        request.send(JSON.stringify(language));
    }
    else {
        $('#fail-modal').modal('show');
    }
}
