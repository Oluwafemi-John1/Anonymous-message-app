import React from 'react'
import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDYQ0GMTQnbvJBzmcMz7v36UNdPaOA22z0",
        authDomain: "anonymous-app-7a80c.firebaseapp.com",
        projectId: "anonymous-app-7a80c",
        storageBucket: "anonymous-app-7a80c.appspot.com",
        messagingSenderId: "189556869649",
        appId: "1:189556869649:web:e7853b7e4b1ed866c03fb0",
        databaseURL: "https://anonymous-app-7a80c-default-rtdb.firebaseio.com"
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)

    let navigate = useNavigate()

    const signIn = () => {
        // alert("ok")
        signInAnonymously(auth)
        .then((res)=>{
            console.log(res);
            navigate('/addchat')
        })
        .catch((err)=>{
            console.log(err);
        })
    }
  return (
    <>
        <div className="mt-5 col-lg-8 col-10 mx-auto text-center p-lg-5 p-2">
            <h1 className='mt-lg-5 mt-4 text-light'>Welcome to SQI Student Party 2023</h1>
            <button onClick={signIn} className='btn btn-success my-5'>Continue</button>
        </div>
    </>
  )
}

export default Home