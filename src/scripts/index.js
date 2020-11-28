const submit = document.querySelector('#submit')
const form = document.querySelector('#registration-form')

submit.addEventListener('click', function(){
  let nameField = document.querySelector('#name')
  let emailField = document.querySelector('#email')
  const isValidName = nameField.checkValidity();
  const isValidMail = emailField.checkValidity();

  if (isValidName && isValidMail) {
    let name = nameField.value
    let email = emailField.value
    let subject = '[WFG] Hey, I want to find goods!'
    let emailBody = `company name:%0D%0Acontact name: ${name}%0D%0Acontact mail: ${email}%0D%0Aproduct name:%0D%0Aproduct description:%0D%0Areference url:%0D%0Aestimated quantity:%0D%0Aexpected price(USD):%0D%0Aothers:`

    let mailTo = 'cwhuang0523@gmail.com'
    href = "mailto:"+mailTo+'?subject='+subject+'&body='+emailBody;
    window.location.href = href
  }
})
