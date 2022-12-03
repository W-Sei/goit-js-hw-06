const submitForm = document.querySelector(".login-form");
submitForm.addEventListener("submit", onFormSybmission);

function onFormSybmission(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  if (!formEl.email.value || !formEl.password.value) {
    alert("Plese, kindly fill in all the form fields. Thank you!");
  }

  const email = formEl.email.value;
  const password = formEl.password.value;
  const formData = {
    email,
    password,
  };

  console.log(formData);
  submitForm.reset();
}
