import {useState} from 'react';
import { Link } from 'react-router';





export default function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab , setActiveTab] = useState("menu")
    return(
        <header className="relative bg-white shadow-sm px-6  py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-amber-900">☕ brew-ahead</h1>


<nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex gap-1 p-1 flex gap-5 font-medium rounded-full bg-amber-100  ">
<Link to="/menu" 
onClick={() => setActiveTab("menu")} 
className={`px-4 py-1.5 text-amber-600 rounded-full hover:bg-white/60 transition ${activeTab === "menu" ? "bg-stone-200" : ""}`}>Menu</Link>
 
<Link to="/orders" 
onClick={() => setActiveTab("orders")}
className={`px-4 py-1.5 text-amber-600 rounded-full hover:bg-white/60 transition ${activeTab === "orders" ? "bg-stone-200": ""}`}>My Orders</Link>
<a href="#" className="px-4 py-1.5 text-amber-600 rounded-full hover:bg-white/60 transition">About</a>


</nav>
<button 
onClick={() => setIsOpen(!isOpen)}
className="md:hidden text-2xl text-amber-900 cursor-pointer">

    {isOpen ? "✕" : "☰"}
</button>









{isOpen && (
    <div className='md:hidden absolute top-full left-0 w-full bg-white flex flex-col'>

<Link
to="/menu"
onClick={() => {setActiveTab("menu");  setIsOpen(false);}}
className="px-4 py-3 rounded-xl text-amber-900 hover:bg-amber-100">
Menu
</Link>

<Link
to="/orders"
onClick={() => {setActiveTab("orders"); setIsOpen(false);}}
className='px-4 py-3 rounded-xl text-amber-900 hover:bg-amber-100 '



>MyOrders</Link>
 </div>
)}

        </header>
    );
}