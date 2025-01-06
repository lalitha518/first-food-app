import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        console.log("chiled constructor1")
    }
    async componentDidMount(){
        console.log("chiled component did mount1")
        const data = await fetch ("https://api.github.com/users");
        const res = await data.json();
        console.log(res);
    }
    render (){
        console.log("child render 1")
        const {name,location,contact} = this.props;
        return(
            <>
            <h1>User Details:</h1>
            <h2>UserName : {name}</h2>
            <p>Location: {location}</p>
            <p> Constact  : {contact}</p>
            </>
            
        )
    }
}

export default UserClass;