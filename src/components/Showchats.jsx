import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref } from "firebase/database"


const Showchats = () => {
    const [allChats, setallChats] = useState([]);

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
    const database = getDatabase(app)
    let newRef = ref(database, "allMessages")

    useEffect(() => {
        onValue(newRef, (snapshot) => {
            let data = snapshot.val()
            console.log(data);
            setallChats(data)
        })
    }, [])


    return (
        <>
            <div className='container mt-2 text-light col-11'>
                <div className='row'>
                    <h1 className='text-decoration-underline text-center' style={{color:'#F5A454'}}>All Messages</h1>
                    {
                        allChats.map((info, index) => (
                            <div key={index} className="card my-lg-3 my-2" style={{backgroundColor: '#291D1E', color: '#F5A454'}}>
                                <div className="card-body">
                                    <h6 className="card-title">{index + 1}</h6>
                                    <hr />
                                    <p className="card-text fs-5 mx-4"><q>{info.msg}</q></p>
                                    <p className='mt-5 fs-6'>{info.time}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Showchats