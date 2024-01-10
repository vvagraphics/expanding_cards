const allPanels = document.querySelectorAll('.panel')

allPanels.forEach((panel) =>{
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    allPanels.forEach((panel) =>{
        panel.classList.remove('active')
    })
}