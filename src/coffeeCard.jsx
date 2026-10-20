export default function CoffeeCard({name, description, price, imageURL, category, onAdd}){
return(

<div className="h-95 bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3 transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:cursor-pointer">

<img src={imageURL} alt={name} className="w-full h-40 object-cover rounded-xl"/>

<h2 className="text-2xl font-bold text-amber-900">{name}</h2>
<p className="category bg-orange-400 w-23 text-center rounded-sm  ">{category}</p>


<p className="text-gray-600 text-sm">{description}</p>

<div className="mt-auto flex justify-between items-center"> 
  {/* ano */}
<span className="text-lg font-semibold text-amber-800">₱{price}</span>
<button onClick={onAdd} className="cursor-pointer bg-amber-900 text-white px-4 py-1 rounded-full hover:bg-amber-700">
    Add
</button>
</div>







</div>





)
}








