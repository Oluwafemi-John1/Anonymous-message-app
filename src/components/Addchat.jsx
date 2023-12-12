import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const Addchat = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDYQ0GMTQnbvJBzmcMz7v36UNdPaOA22z0",
        authDomain: "anonymous-app-7a80c.firebaseapp.com",
        projectId: "anonymous-app-7a80c",
        storageBucket: "anonymous-app-7a80c.appspot.com",
        messagingSenderId: "189556869649",
        appId: "1:189556869649:web:e7853b7e4b1ed866c03fb0"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
        } else {
            
        }
    });
    return (
        <>
            Add your Message here
            <button onClick={goHome}>Back to Home</button>
        </>
    )
}

export default Addchat