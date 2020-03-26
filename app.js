function init() {
  //DOM elements
  const domStartButton = document.querySelector('.start-button')
  const domHeroSize = document.querySelector('#hero-body')
  const domNav = document.querySelector('nav')
  const domNavLists = document.querySelectorAll('nav ul li')

  //event listeners
  domNavLists.forEach(i => {
    i.addEventListener('click', () => {
      domNav.classList.add('hidden')
    })
  })

  domStartButton.addEventListener('click',() => {
    document.location.href = '#bio'
  })

  window.addEventListener('scroll',(e) => {
    if (window.scrollY >= domHeroSize.scrollHeight) {
      domNav.classList.remove('hidden')
    } else {
      domNav.classList.add('hidden')
    }
  })
}

window.addEventListener('DOMContentLoaded', init)