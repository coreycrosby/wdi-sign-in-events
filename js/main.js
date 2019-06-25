document.addEventListener('DOMContentLoaded', function(){

    // When the user presses the .signin button, display the modal window
    // When the user presses the .close button, hide the modal window
    // When the user presses the .submit button, add an .error class to both input elements
    // When the user puts their cursor in one of the input fields, remove the .error class
    
    const signin = document.querySelector('.signin')
    const modal = document.querySelector('.modal')
    const close = document.querySelector('.close')
    const submit = document.querySelector('.submit')
    const username = document.querySelector('#user')
    const password = document.querySelector('#pass')
    
    signin.onclick = function () {
        modal.style.display = "block";
    }

    close.onclick = function() {
        modal.style.display = "none";
    }

    submit.addEventListener('click', function(event) {
        username.classList.add('error');
        password.classList.add('error');   
        event.stopPropagation();
    })

    username.addEventListener('focus', (event) => {
        event.target.classList.remove('error');
    })

    password.addEventListener('focus', (event) => {
        event.target.classList.remove('error');
    })
});