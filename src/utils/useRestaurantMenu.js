import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
                const response = await fetch(MENU_URL + resId);
        
                const result = await response.json();
                console.log(result);
                setResInfo(result.data);
        };

        fetchData();
    }, [resId]);

    return { resInfo };
};

export default useRestaurantMenu;
