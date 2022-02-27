let firebaseConfig = {
  apiKey: "AIzaSyBtqLMIFrq475JoJUjwrQe8b6ilTqr8SCw",
  authDomain: "cmicode-5f9b4.firebaseapp.com",
  projectId: "cmicode-5f9b4",
  storageBucket: "cmicode-5f9b4.appspot.com",
  messagingSenderId: "620974531431",
  appId: "1:620974531431:web:00844b96cc702a641705c2",
  measurementId: "G-4WMKL1N91P",
};

firebase.initializeApp(firebaseConfig);

let uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function () {
      console.log("ログイン成功");
      return true;
    },
  },
  signInSuccessUrl: '../index.html',
  signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
};

let ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.start("#firebaseui-auth-container", uiConfig);