import React, { useContext, useState } from "react";
import { useAppContext } from "../myContext";
import { LOGO_URL } from "../utils/constants";
import Search from "./Search";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const { listOfRes, setListOfRes, originalList } = useAppContext();
  const [buttonName, setButtonName] = useState("Login");
  const onlineStatus  = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-blue-950 text-white">
      <div className="logo-container p-4 m-5">
        <img className="w-10" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus? "✅":"⛔" }</li>
          <li className="px-4">
            <Search
              listOfRes={listOfRes}
              setListOfRes={setListOfRes}
              originalList={originalList}
            />
          </li>
          <li className="px-4"><Link to="/" className="nav-link">Home</Link> </li>
          <li className="px-4"><Link to="/about" className="nav-link">About Us</Link> </li>
          <li className="px-4"><Link to="/contact" className="nav-link">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery" className="nav-link">Groceries</Link></li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart" className="nav-link">Cart - ({cartItems.length} items)</Link></li>
          <li
            className="px-4"
            onClick={() => {
              buttonName === "Login"
                ? setButtonName("Logout")
                : setButtonName("Login");
            }}
          >
            {buttonName}
          </li>
          <li>User:{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
