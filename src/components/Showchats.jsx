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
    
    useEffect(()=>{
        onValue(newRef, (snapshot) => {
            let data = snapshot.val()
            console.log(data);
            setallChats(data)
        })
    }, [])

    
    return (
        <>
            {
                allChats.map((info,index)=>(
                    <div key={index}>
                        <h1>{index+1}</h1>
                        <p>{info.msg}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Showchats