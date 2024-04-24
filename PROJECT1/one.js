const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
//here button is a nodelist
buttons.forEach(function (button) {

    button.addEventListener('click', function (e) {
        if (e.target.id == 'grey') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'yellow') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'violet') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'blue') {
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'green') {
            body.style.backgroundColor = e.target.id
        }
    })
})