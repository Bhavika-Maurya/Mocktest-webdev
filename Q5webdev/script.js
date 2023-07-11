function validateForm(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();
    const age = document.getElementById('age').value.trim();
    const gender = document.getElementById('gender').value;
    const date = document.getElementById('date').value.trim();
    const color = document.getElementById('color').value;
  
    if (name === '' || email === '' || phone === '' || password === '' || age === '' || gender === '' || date === '' || color === '') {
      alert('Please fill in all fields');
      return;
    }
  
    if (!validateEmail(email)) {
      alert('Invalid email address');
      return;
    }
  
    if (!validatePhone(phone)) {
      alert('Invalid phone number');
      return;
    }
  
    if (!validatePassword(password)) {
      alert('Password must be at least 6 characters long');
      return;
    }
  
    if (!validateAge(age)) {
      alert('Age must be between 18 and 99');
      return;
    }
  
    // Form is valid, submit the form or perform further actions
    alert('Form submitted successfully');
    document.getElementById('myForm').reset();
  }
  
  function validateEmail(email) {
    // Basic email validation using regular expression
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  }
  
  function validatePhone(phone) {
    // Basic phone number validation using regular expression
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  }
  
  function validatePassword(password) {
    return password.length >= 6;
  }
  
  function validateAge(age) {
    const parsedAge = parseInt(age);
    return parsedAge >= 18 && parsedAge <= 99;
  }
  