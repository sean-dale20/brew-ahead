import {useEffect, useState} from 'react'
import CoffeeCard from './coffeeCard';
import { getEarliestPickup, dateToTimeString} from "./prep";
import { db } from '../firebase';
import Header from './header';
import {Routes, Route} from 'react-router';
import MyOrders from './MyOrders';

import { collection, getDocs } from 'firebase/firestore';

function App(){


const  [menu, setMenu] = useState ([]);
const [search, setSearch] = useState ("");
const [cart, setCart] = useState([])
const [toast, setToast] = useState("");




function addToCart(food) {

  setCart([...cart, food]);

  alert(`${food.name} added to cart ✔`);




}

function removeFromCart(index){
  
  setCart(cart.filter((food, i) => i !== index));
}

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



const filtered = menu.filter((d) =>
d.name.toLowerCase().includes(search.toLowerCase())
);








  return(
    <>
    <div className='min-h-screen bg-amber-50'>
    <Header/>






<Routes>
<Route path='/menu' element={


  <div>




      
      <div className='container max-w-5xl mx-auto px-3 mt-6 mb-8 '>
     
      <div className='bg-stone-800 text-amber-50 rounded-2xl p-6 flex justify-between '>
 <div className='LEFT-SIDE'>
<h2 className='text-2xl'>Order ahead, skip the line</h2>
<p className='text-stone-300 text-sm mt-1'>We'll have it ready when you arrive</p>

      <p>Earliest pickup: {earliestText}</p>

</div>

<div className='RIGHT-SIDE max-w-sx bg-white/10 border-white/20 rounded-xl p-4'>
<h2 className='font-bold text-sm uppercase tracking-wide text-amber-300'>Note</h2>
  <p className='font-normal text-sm text-stone-300 mt-1'>Orders not picked up within the pickup window are forfeited, and payment is non-refundable.</p>

</div>


</div>
</div>
<div className='search-container max-w-5xl mx-auto flex justify-end mb-4'>

<input
placeholder='Search'
value={search}
onChange={(e) => setSearch(e.target.value)}
className='search w-70 mt-7  bg-transparent rounded-full border border-stone-200 px-5 py-1 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-700 '
>

</input>
</div>

 <div className='coffee-card-container w-420 justify-center align-center rounded-2xl grid grid-cols-3 gap-8 max-w-5xl mx-auto '>
      {filtered.map((d) =>(
       
<CoffeeCard
key={d.id}
name={d.name}
category={d.category}
description={d.description}
price={d.price}
imageURL={d.imageURL}
onAdd={() => addToCart(d)}




/>
     ) )}

    
</div>



</div>
} />
<Route path="/orders" element={<MyOrders cart={cart} remove={removeFromCart}/>} />
</Routes>
</div>

    </>
  );
}

export default App