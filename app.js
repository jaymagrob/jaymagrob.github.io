function init() {
  //DOM elements
  const domStartButton = document.querySelector('.start-button')
  const domNavLists = document.querySelectorAll('nav ul li')
  const domInput = document.querySelector('input')

  //event listeners
  domNavLists.forEach(i => {
    i.addEventListener('click', () => {
      domInput.checked = false
    })
  })

  domStartButton.addEventListener('click',() => {
    document.location.href = '#bio'
  })
}

window.addEventListener('DOMContentLoaded', init)