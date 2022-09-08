export const reducer = (state,action)=>{
    if(action.type === "SET_DATA"){
        const newData = [...state.data,action.payload]
        localStorage.setItem('forumData',JSON.stringify(newData))
            
        return {...state,data:newData}
    }
    if(action.type === "SET_NEW_LIST"){
        localStorage.setItem('forumData',JSON.stringify(action.payload))
            
        return {...state,data:action.payload}
    }
}





