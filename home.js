document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Reset error messages
    document.getElementById('usernameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';
    document.getElementById('genderError').innerText = '';
  
    // Get form values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var gender = document.getElementById('gender').value;
  
    // Validate username
    if (username.trim() === '') {
      document.getElementById('usernameError').innerText = 'Username is required';
      document.getElementById('username').focus();
      return false;
    }
  
    // Validate email
    if (!validateEmail(email)) {
      document.getElementById('emailError').innerText = 'Please enter a valid email address';
      document.getElementById('email').focus();
      return false;
    }
  
    // Validate password
    if (!validatePassword(password)) {
      document.getElementById('passwordError').innerText = 'Password must be at least 8 characters long and start with a capital letter';
      document.getElementById('password').focus();
      return false;
    }
  
    // Validate confirm password
    if (confirmPassword.trim() === '') {
      document.getElementById('confirmPasswordError').innerText = 'Please confirm password';
      document.getElementById('confirmPassword').focus();
      return false;
    }
  
    // Check if password and confirm password match
    if (password !== confirmPassword) {
      document.getElementById('confirmPasswordError').innerText = 'Passwords do not match';
      document.getElementById('confirmPassword').focus();
      return false;
    }
  
    // Validate gender
    if (gender === '') {
      document.getElementById('genderError').innerText = 'Please select your gender';
      document.getElementById('gender').focus();
      return false;
    }
  
    // If everything is valid, you can proceed with form submission
    // For demonstration purposes, let's just log the form values
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Gender:', gender);
  
    // Add success class to the form container
    document.querySelector('.form-container').classList.add('success');
  });
  
  function validateEmail(email) {
    // Regular expression for email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  
  function validatePassword(password) {
    // Password must be at least 8 characters long and start with a capital letter
    var re = /^(?=.*[A-Z]).{8,}$/;
    return re.test(password);
  }