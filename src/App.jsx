import {useEffect, useState} from 'react'
import CoffeeCard from './coffeeCard';
import { getEarliestPickup, dateToTimeString} from "./prep";
import { db } from '../firebase';

import { collection, getDocs } from 'firebase/firestore';

function App(){


const  [menu, setMenu] = useState ([]);



useEffect(() => {
  async function fetchMenu() {
    const snapshot = await getDocs(collection(db, "menu"));

    const drinks = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    

    console.log(drinks);
    setMenu(drinks);
  }

  fetchMenu();
}, []);




const prepMinutes = 20;
const earliest = getEarliestPickup(prepMinutes);
const earliestText = earliest.toLocaleTimeString([], {hour: "numeric", minute: "2-digit"});
const earliestMIn = dateToTimeString(earliest);










  return(
    <>
    <div className='min-h-screen bg-gray-700'>
      <h1>loha</h1>
      <p>Earliest pickup: {earliestText}</p>
 <div className='coffee-card-container w-420 justify-center align-center rounded-2xl grid grid-cols-3 gap-8 max-w-5xl mx-auto'>
      {menu.map((d) =>(
       
<CoffeeCard
key={d.id}
name={d.name}
description={d.description}
price={d.price}
imageURL={d.imageURL}




/>
     ) )}

    
</div>
</div>

    </>
  );
}

export default App