const topSections = document.querySelectorAll('.top-section')

topSections.forEach((topSection) => {
  topSection.addEventListener('click', function(){
    this.nextElementSibling.classList.toggle('active')
    this.children[1].classList.toggle('rotate')
  })
})