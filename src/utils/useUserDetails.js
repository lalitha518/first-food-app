import { useEffect, useState } from "react";

const useUserDetails = ()=>{

const [userData, setUserData] = useState("");
const fetchData =  async ()=>{
    const data =await fetch("https://api.github.com/users/Lalitha-banavath");
    const res = await data.json();
    console.log(res);
    setUserData(res);
}

    // fetchData
    useEffect(()=>{
        fetchData();
    },[]);

   
    return userData;

}

export default  useUserDetails;