<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB90elVn6vefkJVkVlmddE62CEO24rL9u0",
    authDomain: "homeaffairsapp-d246d.firebaseapp.com",
    projectId: "homeaffairsapp-d246d",
    storageBucket: "homeaffairsapp-d246d.firebasestorage.app",
    messagingSenderId: "1067965480578",
    appId: "1:1067965480578:web:085953bd31afbeb9ddfe9b",
    measurementId: "G-H59LD21S2W"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>