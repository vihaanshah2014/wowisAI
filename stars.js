// Initialize Firebase app
const firebaseConfig = { 
  apiKey: "AIzaSyBx4TTN924wfPBDmo2EuD0fXpmwD6EwagU",
  authDomain: "makewowis.firebaseapp.com",
  projectId: "makewowis",
  storageBucket: "makewowis.appspot.com",
  messagingSenderId: "490888137281",
  appId: "1:490888137281:web:13f7d4d22c9532d1f054c0",
  measurementId: "G-H1TTCVV12D"
};
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
