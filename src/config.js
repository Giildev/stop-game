import Firebase from "firebase";

const config = {
  apiKey: "AIzaSyAE-wdM_h5RVLyxzslVUmR4yQdPZYgRR2Q",
  authDomain: "stop-game-4f068.firebaseapp.com",
  databaseURL: "https://stop-game-4f068.firebaseio.com",
  projectId: "stop-game-4f068",
  storageBucket: "stop-game-4f068.appspot.com",
  messagingSenderId: "112559848655"
};

Firebase.initializeApp(config);
const DB = Firebase.database().ref();
export default DB;
