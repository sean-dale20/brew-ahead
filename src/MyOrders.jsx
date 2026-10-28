import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";








export default function MyOrders({cart, remove}){

    const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [gcashRef, setGcashRef] = useState("");
const [screenshot, setScreenshot] = useState(null);



let total = 0;

cart.forEach((food) => {
    total = total + food.price
})



async function placeOrder(){
    if(name.trim() === "" || phone.trim() === "" || gcashRef.trim() === ""){
        alert("Please fill out all the forms");
        return;
    }
    if(!screenshot){
        alert("please upload your payment screenshot.");
        return;
    }
    try {
        await addDoc(collection(db, "orders"),{
            name: name,
            phone: phone,
            gcashRef: gcashRef,
            total: total,
            items: cart.map((food) => ({name: food.name, price: food.price})),
            status: "pending",
            createdAt: new Date()
        });
        alert("Order placed!");

    } catch (error) {
        console.log(error);
        alert("something went wrong. Please try again.");
    }

}






    return(
<div className="max-w-3xl mx-auto px-4 py-8">
<h2 className="text-2xl font-bold text-amber-900">My Orders</h2>


{cart.length === 0 ?

<div className="flex items-center justify-center min-h-[60vh]">
<p className="text-stone-600 mt-10 text-xl text-center">Your orders will show up here.</p>
</div>
: <>

{cart.map((food, index) =>(

<div key={index} className="flex justify-between bg-white rounded-xl p-4 mt-3 shadow-sm">
<span className="flex-1">{food.name}</span>


<button className="flex items-center gap-4 cursor-pointer" onClick={() => remove(index)}>Remove</button>
<span className="w-16 text-right font-semibold text-amber-800">₱{food.price}</span>

</div>



))}
<div className="total flex justify-between bg-amber-200 rounded-xl mt-5 p-4">
<p className="font-semibold">Total </p>
<span className="font-semibold text-emerald-900">₱{total}</span>
    
</div>
<hr className="mt-10 border-stone-300" />
<div className="input-container flex flex-col gap-2 mt-10 ">
<h2 className="font-bold text-amber-700">Your details</h2>
<input
placeholder="Your name"
value={name}
onChange={(e) => setName(e.target.value)}
className="border border-stone-600 rounded-md p-1"

/>
<input
placeholder="Reference number"
value={gcashRef}
onChange={(e) => setGcashRef(e.target.value)}
className="border border-stone-700 rounded-md p-1"


/>
<input
    placeholder="Phone"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="border border-stone-600 rounded-md p-1"
/>
<p  className="mt-8 font-bold text-amber-600">Payment screenshot</p>
<input
    type="file"
    accept="image/*"
    onChange={(e) => setScreenshot(e.target.files[0])}
    className="w-fit file:mr-3 file:bg-amber-900 file:text-white file:rounded-sm file:px-4 file:py-1 file:border-0 file:cursor-pointer
    "
/>


<button onClick={placeOrder} className="mt-4 w-full bg-amber-600 text-white rounded-s py-1 cursor-pointer hover:bg-amber-700">
    Place order
</button>

</div>

</>
}










</div>



    );
}