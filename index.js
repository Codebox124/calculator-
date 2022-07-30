const btns = document.querySelectorAll('button')
const display = document.getElementById('display')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.textContent == '=') {
      evaluate()
    }
    else if(btn.textContent == 'Clear'){
      display.textContent = ''
    }
    else{
      display.textContent += btn.getAttribute('value')
    }
  })


})

function evaluate() {
  console.log(display.textContent);
  let soln = eval(display.textContent)
  display.textContent = soln
}
