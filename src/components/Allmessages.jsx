import React, { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, remove } from "firebase/database"

const Allmessages = () => {
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

    const deleteMsg = (index) => {
        let dRef = ref(database, `allMessages/${index}`)
        let confirmation = confirm("Una sure say you wan delete am?")
        if (confirmation==true) {
            remove(dRef)
            .then((res)=>{
                console.log(res, "deleted succssfully");
                alert('izz gone')
            })
            .catch((err)=>{
                console.log(err);
            })
        } else {
            console.log("ko delete o");
        }
    }
  return (
    <>
        <div className='container mt-2 text-light col-11'>
                <div className='row'>
                    <h1 className='text-decoration-underline text-center' style={{color:'#F5A454'}}>All Messages</h1>
                    {

                        allChats==null?console.log('ok'):allChats.map((info, index) => (
                            <div key={index} className="card my-lg-3 my-2" style={{backgroundColor: '#291D1E', color: '#F5A454'}}>
                                <div className="card-body">
                                    <h6 className="card-title">{index + 1}</h6>
                                    <hr />
                                    <p className="card-text fs-5 mx-4"><q>{info.msg}</q></p>
                                    <p className='fs-6'>{info.time}&nbsp;&nbsp;{info.daty}</p>
                                    <button className='btn btn-danger' onClick={()=>deleteMsg(index)}>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
    </>
  )
}

export default Allmessages