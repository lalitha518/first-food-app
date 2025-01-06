import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../redux/cartSlice";
const ItemList =({items})=>{
    console.log(items);
    const dispatch = useDispatch()
    const handleAddItem =(item)=>{
        // dispatch an action
        dispatch(addItems(item));
    }
    return (
        <div>
            {items.map((item)=>(
                <div className="p-4 m-4 border-b-2 border-blue-300 text-left flex" key={item?.card?.info?.id}>
                    <div className="w-9/12">
                    <div className="font-bold text-sm">
                        <span>{item?.card?.info?.name}</span>
                        <span> -₹ {item?.card?.info?.price / 100}</span>
                    </div>
                    <p className="text-xs py-2">{item?.card?.info?.description}</p>
                    </div>
                    <div className="w-36 3/12">
                    <img className="w-full"  src={CDN_URL + item?.card?.info?.imageId} alt="" />
                    <div className="absolute">
                        <button className="p-2 mx-16 bg-blue-200 rounded-lg"
                            onClick={()=>handleAddItem(item)}
                        >Add+</button>
                    </div>
                    </div>
                    
                </div>

            ))}
        </div>
    )

}

export default ItemList;