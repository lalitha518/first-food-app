import useUserDetails from "../utils/useUserDetails";

const User = ()=>{
   const userData = useUserDetails();
    return(
        <>
        <h1>User Details:</h1>
        <div>
            <h2>UserName : {userData.name}</h2>
            <p>location: {userData.location}</p>
        </div>
        </>
        
    )
}


export default User;