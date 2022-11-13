 
let i = 0
let button = document.querySelector('#button')

button.addEventListener('click', () => {
    let body = document.body
    if ( i === 0) {
        body.style.backgroundColor = '#3944F7'
        i=1
    } else {
        body.style.backgroundColor = '#22CB5C'
        i=0
    }
})