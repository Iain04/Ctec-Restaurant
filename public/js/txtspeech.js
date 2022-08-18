(function() {
  const elemPlayButton = document.querySelector("#play-button")
  const elemVoice = document.querySelector("#selectLan");
  const elemText = document.querySelector("#aboutText")
  
  elemPlayButton.addEventListener("click", function() {
    if (elemVoice.value == "english") {
      var voice = "Joanna"
    }
    
    if (elemVoice.value == "italian") {
      var voice = "Bianca"
    }
    
    let url = "https://90sq38y7g7.execute-api.us-east-1.amazonaws.com/default/polly"
    url += "?voice=" + encodeURIComponent(voice);
    url += "&text=" + encodeURIComponent(elemText.textContent);
    
    const elemAudio = document.createElement("AUDIO");
    elemAudio.style.display = "none";
    document.body.appendChild(elemAudio);
    elemAudio.controls = true;
    elemAudio.src = url;
    elemAudio.play();
  
  });

}());
