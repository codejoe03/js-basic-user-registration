function submitCheck() {
  const emailUser = document.getElementById('emailUser').value;
  const passwordUser = document.getElementById('password').value;
  const users = [
    { userName: 'joegomes.86@outlook.com', password: 'joe', name: 'Joseph G', phone: '111-111-11110' },
    { userName: 'jamesgomes.619@gmail.com', password: 'james', name: 'James', phone: '111-111-11111' }
  ] 

  if ((validateEmail(emailUser) || validatePhone(emailUser)) && validatePassword(passwordUser)) {
    alert('Ok');
  }
  else {
    alert('Nopes');
    return;
  }

  /* Function find-test to check existing users */

  function findExistingUser(getUserName) {
    return getUserName.userName == document.getElementById('emailUser').value || getUserName.phone == document.getElementById('emailUser').value;
  }

  if (users.find(findExistingUser)) {
    alert('This user already exists');
  } else {
    alert('New User!');
  }

  function validateEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(String(email).toLowerCase());
  }
  function validatePhone(phone) {
    const phoneRegex = /[0-9]{4}-[0-9]{4}-[0-9]{3}/;
    //const phoneRegex = /[0-9]{11}/;
    return phoneRegex.test(String(phone));
  }

  function validatePassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    return passwordRegex.test(String(password));
  }

}