var display = document.getElementById("display")
var calculatorBtns = document.getElementById("calculator-buttons")

var chars = "/C←789456123(0+)*-="

for (char of chars.split('')){
  var btn = document.createElement('button')
  btn.setAttribute('class', 'calculator-button')

  if(char == "="){
    btn.setAttribute('style', 'width: 320px;')
  }

  btn.innerText = char
  calculatorBtns.appendChild(btn)
}

var buttons = Array.from(document.getElementsByClassName("calculator-button"))

buttons.map(button => {
  button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
      case "←":
        display.innerText = display.innerText.slice(0, -1)
        break;

      case "C":
        display.innerText = ""
        break;

      case "=":
        try {
          result = eval(display.innerText)
        } catch {
          display.innerText = "Erro!"
        }
        break;
    
      default:
        display.innerText += e.target.innerText
        break;
    }
  })
})