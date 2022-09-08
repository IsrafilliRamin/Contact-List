import { useContext, useState, useReducer } from "react";
import React from "react";
import {reducer} from "./reducer"
import { getLocalStorage } from "../utils/localstorage";

const initialState = {
    data:getLocalStorage("forumData"),
    
}

const AppContext = React.createContext()


export const AppProvider = ({children})=>{
const [data,setData] = useState([])
const [state,dispatch] = useReducer(reducer,initialState)

const  updateContacts = (id,updatecontacts)=>{
    setData(data.map((dat)=>dat.id === id ? updatecontacts : dat))
}

const setDeleted = (newList) =>{
    dispatch({type:"SET_NEW_LIST",payload:newList})
}

const setReducerData = (object)=>{
    dispatch({type:"SET_DATA",payload:object})
}



    return(
        <AppContext.Provider value={{setData,data,updateContacts,setReducerData,setDeleted,state}}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalCotext = ()=>{
    return useContext(AppContext)
}
