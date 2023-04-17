var txtInput = document.querySelector("#txt1")
var btnTranslate = document.querySelector("#btn-translate");
var outputText = document.querySelector("#output")

var serverURL = "	https://api.funtranslations.com/translate/valyrian.json";

function translate(text)
{
     return serverURL + "?" + "text=" + text;
}


function clickHandler ()
{     
      console.log("Button clicked");
      console.log("Entered text is: "+ txtInput.value)
      var inputTxt = txtInput.value;

      fetch(translate(inputTxt))
            .then(response => response.json())
            .then (json => {
            var translatedText = json.contents.translated;
            outputText.innerText = translatedText;
            //console.log(json.contents.translated)
            })
      
}

btnTranslate.addEventListener("click", clickHandler)
