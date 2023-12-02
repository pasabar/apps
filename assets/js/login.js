document.addEventListener('DOMContentLoaded', function () {
  // Your form element
  const signInForm = document.querySelector('form');

  signInForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Mocking login success and failure (replace this with your actual login logic)
    const loginSuccess = Math.random() < 0.5; // 50% chance of success, for demonstration purposes

    if (loginSuccess) {
      // Show SweetAlert for successful login
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully logged in!',
      });
    } else {
      // Show SweetAlert for failed login
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Invalid email or password. Please try again.',
      });
    }
  });
});