export const setLocalStorage = (key,value)=>{
   return localStorage.setItem(key,value)

}

export const getLocalStorage = (key)=>{
    let value  = JSON.parse(localStorage.getItem(key))
    if(!value){
        value = []
    }
    return  value
}


