function init() {
  const outerBox = document.querySelectorAll('.outerBox')
  console.log(outerBox)

  var isScrolling

  window.addEventListener('scroll', () => {
  
    window.clearTimeout( isScrolling )
  
    isScrolling = setTimeout(function() {
    
      console.log('SCROLL Y',window.scrollY)
      console.log('INNER HEIGHT',window.innerHeight)
      console.log('TOTAL BODY', document.body.scrollHeight)

    }, 66)

  }, false)

}

window.addEventListener('DOMContentLoaded', init)