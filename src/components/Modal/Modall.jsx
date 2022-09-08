import React from 'react'
import "./fayl.scss"
const Modal = ({closemodal,inData}) => {
   

    return (
        <div className="modalBackground">
            <div className="modalContainer">
                
                {inData.map((item,id)=>(
                    <nav key={id}>
                        <ul>
                            <li>
                                {"Name: "+item.name}
                            </li>
                            <li>
                                {"Surname:   "+item.surname}
                            </li>
                            <li>
                                {"Father's name:   "+item.fathersname}
                            </li>
                            <li>
                                {"Profession:   "+item.profession}
                            </li>
                            <li>
                                {"Email:   "+item.email}
                            </li>
                            <li>
                                {"Gender:   "+item.radio}
                            </li>
                        </ul>
                    </nav>
                   
                    
                    ))}
               <button onClick={() => closemodal(false)}> Close </button>
            </div>
        </div>
    )
}

export default Modal