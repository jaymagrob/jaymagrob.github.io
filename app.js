function init() {
  //DOM elements
  const domStartButton = document.querySelector('.start-button')
  

  //event listeners
  domStartButton.addEventListener('click',() => {
    document.location.href = '#bio'
  })
}

window.addEventListener('DOMContentLoaded', init)