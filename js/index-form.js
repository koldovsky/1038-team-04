const form = document.getElementById("reservation-form-formspree");

function checkFormValidity() {
    return document.querySelector('.reservation-input').value !== '' &&
           document.querySelector('.reservation-select').value !== '';
}

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.getElementById("index-form-status");
    if (!checkFormValidity()) {
        status.innerText = 'Please correct errors';
        return;
    }
    const response = await fetch(event.target.action, {
        method: 'POST', // Set the HTTP method to POST
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
    } else {
        status.innerHTML = "Oops! There was a problem submitting your form";
    }
}

form.addEventListener("submit", handleSubmit)