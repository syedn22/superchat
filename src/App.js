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
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
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
