import { toast } from "react-toastify";


const getStoredList = () =>{
    const getStoredStr = localStorage.getItem("read-list");
    if(getStoredStr){
        const storedList = JSON.parse(getStoredStr);
        return storedList; 
    }
    else{
        return [];
    }
}


const addToReadList = (id) =>{
    const storedList = getStoredList();
    if(storedList.includes(id)){
        toast.error('already exist')
    }
    else{
        storedList.push(id);
        const setReadList = JSON.stringify(storedList);
        localStorage.setItem('read-list', setReadList)
    }
}


// wish list
const getStoredWish = () =>{
    const getStoredStr = localStorage.getItem("wish-list");
    if(getStoredStr){
        const storedList = JSON.parse(getStoredStr);
        return storedList; 
    }
    else{
        return [];
    }
}


const addToWishList = (id) =>{
    const storedList = getStoredWish();
    if(storedList.includes(id)){
        alert('already exist')
    }
    else{
        storedList.push(id);
        const setWishList = JSON.stringify(storedList);
        localStorage.setItem('wish-list', setWishList)
    }
}

export {addToReadList,addToWishList,getStoredList,getStoredWish};