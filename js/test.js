// function([string1, string2],target id,[color1,2])    
 consoleText(['Hello', 'DeafTech'])

function consoleText(words, id = 'text') {
  var visible = true
  var con = document.getElementById('console')
  var letterCount = 1
  var x = 1
  var waiting = false
  var target = document.getElementById(id)
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {      
        var usedWord = words.shift()
        words.push(usedWord)
        x = 1
        letterCount += x
        waiting = false
      }, 100)
    } else 
      if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true
      window.setTimeout(function() {
        x = -1
        letterCount = x +2
        waiting = false
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x
    }
  }, 100)

}