import { useEffect, useState } from "react";

const useOnlineStatus = ()=>{
    const [onlineStatus, setOnloneStatus] = useState(true)

    useEffect(()=>{
        window.addEventListener("offline", ()=>{
            setOnloneStatus(false);
        })
        window.addEventListener("online", ()=>{
            setOnloneStatus(true);
        })
    },[]);
    return onlineStatus;
}

export default useOnlineStatus;