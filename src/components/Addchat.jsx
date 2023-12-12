import React from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';


const Addchat = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyDYQ0GMTQnbvJBzmcMz7v36UNdPaOA22z0",
        authDomain: "anonymous-app-7a80c.firebaseapp.com",
        projectId: "anonymous-app-7a80c",
        storageBucket: "anonymous-app-7a80c.appspot.com",
        messagingSenderId: "189556869649",
        appId: "1:189556869649:web:e7853b7e4b1ed866c03fb0"
    };

    let navigate = useNavigate()
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log(uid);
        } else {
            navigate('/')
        }
    });

    const goHome = () => {
        signOut(auth)
            .then(() => {
                console.log('sign out successful');
                navigate('/')
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <>
            <div className="col-lg-8 col-10 mx-auto mt-lg-5 mt-3">
                <div className="contact-form">
                    {/* <span className="heading">Message</span> */}
                    <form>
                        <label htmlFor="message" className='fw-bold fs-3'>Message:</label>
                        <textarea id="message" name="message" required=""></textarea>
                        <button type="button">Submit</button>
                    </form>
                </div>
                <button onClick={goHome} className='btn btn-primary my-3'>Back to Home</button>
            </div>

        </>
    )
}

export default Addchat