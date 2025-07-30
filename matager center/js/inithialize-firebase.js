// const firebaseConfig = {
//   apiKey: "AIzaSyDss53pHibCpqo87_1bhoUHkf8Idnj-Fig",
//   authDomain: "matager-f1f00.firebaseapp.com",
//   databaseURL: "https://matager-f1f00-default-rtdb.firebaseio.com",
//   projectId: "matager-f1f00",
//   storageBucket: "matager-f1f00.appspot.com",
//   messagingSenderId: "922824110897",
//   appId: "1:922824110897:web:b7978665d22e2d652e7610",
//   measurementId: "G-FWS29Z8GMT",
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

//  // Check Authentication Status on Page Load
//   window.onload = function() {
//     auth.onAuthStateChanged(user => {
//       if (!user) {
//         // If user not authenticated, show the SweetAlert
//         promptSignIn();
//       }
//     });
//   };

//   // Function to Show SweetAlert for Sign In
//   function promptSignIn() {
//     Swal.fire({
//       title: 'Sign In',
//       html:
//         '<input id="email" class="swal2-input" placeholder="Email">' +
//         '<input id="password" class="swal2-input" placeholder="Password" type="password">',
//       confirmButtonText: 'Sign In',
//       focusConfirm: false,
//       preConfirm: () => {
//         const email = Swal.getPopup().querySelector('#email').value;
//         const password = Swal.getPopup().querySelector('#password').value;
//         if (!email || !password) {
//           Swal.showValidationMessage(`Please enter email and password`);
//         }
//         return { email: email, password: password };
//       }
//     }).then((result) => {
//       if (result.isConfirmed) {
//         const { email, password } = result.value;
//         signInUser(email, password);
//       }
//     });
//   }

//   // Function to Sign In User
//   function signInUser(email, password) {
//     auth.signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in successfully
//         const user = userCredential.user;
//         Swal.fire({
//           icon: 'success',
//           title: 'Signed in successfully!',
//           timer: 1500,
//           showConfirmButton: false
//         }).then(() => {
//           // Redirect to system page
//           window.location.href = "/index.html"; // replace with your system/dashboard URL
//         });
//       })
//       .catch((error) => {
//         // Handle sign-in errors
//         Swal.fire({
//           icon: 'error',
//           title: 'Sign In Failed',
//           text: error.message,
//         });
//       });
//   }


const firebaseConfig = {
  apiKey: "AIzaSyDss53pHibCpqo87_1bhoUHkf8Idnj-Fig",
  authDomain: "matager-f1f00.firebaseapp.com",
  databaseURL: "https://matager-f1f00-default-rtdb.firebaseio.com",
  projectId: "matager-f1f00",
  storageBucket: "matager-f1f00.appspot.com",
  messagingSenderId: "922824110897",
  appId: "1:922824110897:web:b7978665d22e2d652e7610",
  measurementId: "G-FWS29Z8GMT",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Check Authentication Status on Page Load
window.onload = function () {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      // If user not authenticated, show the SweetAlert
      promptSignIn();
    }
  });
};

// Function to Show SweetAlert for Sign In
function promptSignIn() {
  Swal.fire({
    title: "Sign In",
    html:
      '<input id="email" class="swal2-input" placeholder="Email">' +
      '<input id="password" class="swal2-input" placeholder="Password" type="password">',
    confirmButtonText: "Sign In",
    allowOutsideClick: false, // Prevent closing when clicking outside
    allowEscapeKey: false, // Prevent closing with escape key
    focusConfirm: false,
    preConfirm: () => {
      const email = Swal.getPopup().querySelector("#email").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!email || !password) {
        Swal.showValidationMessage(`Please enter email and password`);
      }
      return { email: email, password: password };
    },
  }).then((result) => {
    if (result.isConfirmed) {
      const { email, password } = result.value;
      signInUser(email, password);
    }
  });
}

// Function to Sign In User
function signInUser(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      Swal.fire({
        icon: "success",
        title: "Signed in successfully!",
        timer: 1500,
        showConfirmButton: false,
      }).then(() => {
        // Redirect to system page
        window.location.href = "./index.html"; // replace with your system/dashboard URL
      });
    })
    .catch((error) => {
      // Handle sign-in errors
      Swal.fire({
        icon: "error",
        title: "Sign In Failed",
        text: error.message,
        allowOutsideClick: false, // Still prevent outside click while showing error
        allowEscapeKey: false, // Prevent escape key during error display
      }).then(() => {
        // Re-show the sign-in form after an error
        promptSignIn();
      });
    });
}
