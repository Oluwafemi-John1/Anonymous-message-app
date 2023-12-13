import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';
import { getDatabase, ref, set, onValue } from "firebase/database"

const Addchat = () => {
    const [msg, setmsg] = useState('')
    const [disp, setdisp] = useState(false)
    const [disp2, setdisp2] = useState(false)
    const [count, setcount] = useState(0)
    

    const firebaseConfig = {
        apiKey: "AIzaSyDYQ0GMTQnbvJBzmcMz7v36UNdPaOA22z0",
        authDomain: "anonymous-app-7a80c.firebaseapp.com",
        projectId: "anonymous-app-7a80c",
        storageBucket: "anonymous-app-7a80c.appspot.com",
        messagingSenderId: "189556869649",
        appId: "1:189556869649:web:e7853b7e4b1ed866c03fb0",
        databaseURL: "https://anonymous-app-7a80c-default-rtdb.firebaseio.com"
    };

    let navigate = useNavigate()
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)
    const database = getDatabase(app)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
            } else {
                navigate('/')
            }
        });
    }, [])
    
    let newRef = ref(database, "allMessages")
    useEffect(()=>{
        onValue(newRef, (snapshot) => {
            let data = snapshot.val()
            // console.log(data);
            setcount(data.length)
        })
    }, [])

    const sendMsg = () => {
        let msgs = {msg}
        if (msg=='') {
            setdisp(true)
            setdisp2(false)
        } else {
            let msgRef = ref(database, `allMessages/${count}`)
            let saved = set(msgRef, msgs)
            setmsg('')
            setdisp(false)
            saved?setdisp2(true):navigate('/addchat')
        }
    }

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
                        {disp==false?console.error():<small className='alert alert-danger text-center p-2 my-2'>Inputs cannot be empty</small>}
                        {disp2==false?console.error():<small className='alert alert-success text-center p-2 my-2'>Succesfully sent!</small>}
                        <label htmlFor="message" className='fw-bold fs-3'>Message:</label>
                        <textarea id="message" name="message" required="" onChange={(e)=>setmsg(e.target.value)} value={msg}></textarea>
                        <button type="button" onClick={sendMsg}>Submit</button>
                    </form>
                </div>
                <button onClick={goHome} className='btn btn-primary my-3'>Back to Home</button>
            </div>

        </>
    )
}

export default Addchat