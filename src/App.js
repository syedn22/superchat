import React, { useState } from "react";
import "./App.css";

import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";
import SignOut from "./components/SignOut";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/analytics";

import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyDyvQjpIeQHieHVfpSs4UUhBm0pB9DIb0c",
  authDomain: "superchat-2444c.firebaseapp.com",
  projectId: "superchat-2444c",
  storageBucket: "superchat-2444c.appspot.com",
  messagingSenderId: "146772142093",
  appId: "1:146772142093:web:c10ae4cc3036d05d930d44",
  measurementId: "G-ERQBJ9HLL9",
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);
  const [currentUser, setcurrentUser] = useState(null);
  return (
    <div className="App">
      <header>
        <h1>Superchat ⚛️🔥💬</h1>
        <SignOut auth={auth} onClick={() => auth.signOut()} />
      </header>

      <section>
        {user ? (
          <ChatRoom
            auth={auth}
            firestore={firestore}
            firebase={firebase}
            currentUser={currentUser}
          />
        ) : (
          <SignIn
            firebase={firebase}
            auth={auth}
            onAuth={(user) => setcurrentUser(user)}
          />
        )}
      </section>
    </div>
  );
}

export default App;
