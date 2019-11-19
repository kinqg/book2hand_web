import app from "firebase/app";
import "firebase/auth";
import "firebase/firebase-firestore";

const config = {
  apiKey: "AIzaSyAZ8UupOa_APJDjv1ZSdRPOOLnoNcuok50",
  authDomain: "book2handstore.firebaseapp.com",
  databaseURL: "https://book2handstore.firebaseio.com",
  projectId: "book2handstore",
  storageBucket: "book2handstore.appspot.com",
  messagingSenderId: "465250523088",
  appId: "1:465250523088:web:2833bd432678f636"
};
app.initializeApp(config);

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
      return this.auth.signOut();
  }

  async signUp(name, email, password){
      await this.auth.createUserWithEmailAndPassword(email,password)
      return this.auth.currentUser.updateProfile({
          displayName: name,
      })
  }

  isInitialized(){
      return new Promise(resolve=>{
          this.auth.onAuthStateChanged(resolve)
      })
  }
}

export default new Firebase();