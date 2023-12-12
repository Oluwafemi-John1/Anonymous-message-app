import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { useNavigate } from 'react-router-dom';
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

    useEffect(()=>{
        let newRef = ref(database, "allMessages")
        onValue(newRef, (snapshot) => {
            let data = snapshot.val()
            setallChats(data)
        })

    }, [])

    
    return (
        <>
            {
                allChats.map((msg,index)=>(
                    <h1>{index}</h1>
                ))
            }
        </>
    )
}

export default Showchats