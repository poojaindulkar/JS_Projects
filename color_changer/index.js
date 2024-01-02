const buttons =document.querySelectorAll(".button")
const body=document.querySelector('body')

buttons.forEach((button)=>(
    // console.log(button)
    button.addEventListener('click', (event)=>{
        console.log()

        switch(event.target.id){
            case "grey":
                 body.style.backgroundColor=event.target.id;
            case "white":
                body.style.backgroundColor=event.target.id
            case "blue":
                body.style.backgroundColor=event.target.id
            case "yellow":
                body.style.backgroundColor=event.target.id

        }
        
    })
))