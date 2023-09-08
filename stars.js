// Initialize Firebase app
const firebaseConfig = { /* your Firebase configuration here */ };
firebase.initializeApp(firebaseConfig);

// Get Google authentication button element
const googleButton = document.querySelector('.login-with-google-btn');

// Add event listener to Google authentication button
googleButton.addEventListener('click', () => {
  // Create an instance of the Google provider object
  const provider = new firebase.auth.GoogleAuthProvider();

  // Trigger a sign-in popup with the Google provider
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      // Redirect to main.html upon successful authentication
      window.location.href = 'main.html';
    })
    .catch((error) => {
      // Handle authentication error
      console.error(error);
    });
});
