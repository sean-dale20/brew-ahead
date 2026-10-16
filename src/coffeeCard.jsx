export default function CoffeeCard({name, description, price, imageURL}){
return(

<div className="bg-white rounded-2xl shadow-md p-5 flex flex-col gap-3">

<img src={imageURL} alt={name} className="w-full h-40 object-cover rounded-xl"/>
<h2 className="text-2xl font-bold text-amber-900">{name}</h2>
<p className="text-gray-600 text-sm">{description}</p>

<div className="flex justify-between items-center"> 
  {/* ano */}
<span className="text-lg font-semibold text-amber-800">{price}</span>
<button className="cursor-pointer bg-amber-900 text-white px-4 py-1 rounded-full hover:bg-amber-700">
    Add
</button>
</div>







</div>





)
}








