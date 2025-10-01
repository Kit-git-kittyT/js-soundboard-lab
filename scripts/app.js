const buttons = document.querySelectorAll(".grid-item")

buttons.forEach(button => {
    button.addEventListener("click", (e) =>{
        const clickedButton = e.target.id
        const audio = new Audio(`sounds/${clickedButton}.wav`)
        audio.play()
        })
    })
    