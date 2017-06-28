import Firebase from "firebase";

const config = {
  apiKey: "AIzaSyAG7OyRIx9KRpuQ4GUr0KHUdbnvwfsb07g",
  authDomain: "ecommerce-83dbc.firebaseapp.com",
  databaseURL: "https://ecommerce-83dbc.firebaseio.com",
  projectId: "ecommerce-83dbc",
  storageBucket: "ecommerce-83dbc.appspot.com",
  messagingSenderId: "314917398490"
};

Firebase.initializeApp(config);
const EDB = Firebase.database().ref();
export default EDB;
