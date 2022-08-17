(function() {
  const elemPlayButton = document.querySelector("#play-button")
  const elemText = document.querySelector("#text")
  
  elemPlayButton.addEventListener("click", function() {
    let url = "https://90sq38y7g7.execute-api.us-east-1.amazonaws.com/default/polly"
    url += "?voice=Joanna";
    url += "&text=" + encodeURIComponent(elemText.textContent);
    
    const elemAudio = document.createElement("AUDIO");
    document.body.appendChild(elemAudio);
    elemAudio.controls = true;
    elemAudio.src = url;
    elemAudio.play();
  
  });

}());
