export default function MyOrders({cart, remove}){


let total = 0;

cart.forEach((food) => {
    total = total + food.price
})





    return(
<div className="max-w-3xl mx-auto px-4 py-8">
<h2 className="text-2xl font-bold text-amber-900">My Orders</h2>


{cart.length === 0 ?

<div className="flex items-center justify-center min-h-[60vh]">
<p className="text-stone-600 mt-10 text-xl text-center">Your orders will show up here.</p>
</div>
: <>

{cart.map((food, index) =>(

<div className="flex justify-between bg-white rounded-xl p-4 mt-3 shadow-sm">
<span>{food.name}</span>


<button className="cursor-pointer" onClick={() => remove(index)}>Remove</button>
<span className="font-semibold text-amber-800">₱{food.price}</span>

</div>



))}
<div className="total flex justify-between bg-amber-200 rounded-xl mt-5 p-4">
<p className="font-semibold">Total </p>
<span className="font-semibold text-emerald-900">₱{total}</span>
    
</div>



</>
}










</div>



    );
}