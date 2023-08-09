const form = document.getElementById("any-questions-form-formspree");

function checkFormValidity() {
  return document.querySelector('.any-questions__form-name').value !== '' &&
         document.querySelector('.any-questions__form-tel').value !== '';
}

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("any-questions-form-status");
  if (!checkFormValidity()) {
    status.innerText = "Please don't leave empty blanks!";
    return;
}
const response = await fetch(event.target.action, {
    method: form.method,
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