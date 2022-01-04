const UCButton = document.getElementById("upper-case");
const LCButton = document.getElementById("lower-case");
const PCButton = document.getElementById("proper-case");
const SCButton = document.getElementById("sentence-case");
const STFButton = document.getElementById("save-text-file");

UCButton.addEventListener("click", function toUpper(){
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toUpperCase();
})

LCButton.addEventListener("click", function toLower(){
    let text = document.getElementById("textarea").value;
    document.getElementById("textarea").value = text.toLowerCase();
})

PCButton.addEventListener("click", function toProper(){
    let text = document.getElementById("textarea").value;
    let properCase = text.split(" ").map(word =>
        word[0].toUpperCase() + word.substring(1).toLowerCase()).join(" ");
    document.getElementById("textarea").value = properCase;
})

SCButton.addEventListener("click", function toSentence() {
    let text = document.getElementById("textarea").value;
    let sentenceCase = text.split(". ").map(word =>
        word[0].toUpperCase() + word.substring(1).toLowerCase()).join(". ");
    document.getElementById("textarea").value = sentenceCase;
})

STFButton.addEventListener("click", function () {
    let text = document.getElementById("textarea").value;
    // Start file download.
    download("text.txt", text);
})

function download(filename, text) {
  let element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

