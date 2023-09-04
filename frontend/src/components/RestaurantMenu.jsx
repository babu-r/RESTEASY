import React, { useState, useEffect } from 'react';
import axios from 'axios';

const baseURL = "http://localhost:3001/api/menu"


const RestaurantMenu = () => {
   const [menuItems, setMenuItems] = useState([]);
   console.log(menuItems)

   useEffect(() => {
      async function getMenu() {
         const response = await axios.get(baseURL);
         if (response.data.status === "Success") {
            setMenuItems(response.data)
         }
      }
      getMenu()
   }, []);

   return (
      <div>
         <h2>Restaurant Menu</h2>
         <ul>
            {menuItems.map(item => (
               <li key={item.id}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <img src={item.imageUrl} alt={item.name} />
               </li>
            ))}
         </ul>
      </div>
   );
};

export default RestaurantMenu;