"use client";
import { ProductInterface } from "@/app/interfaces/product";
import { useRouter } from "next/navigation";

export default function ProductCard(props: { item: ProductInterface }) {
    const { item } = props
    const router = useRouter();

    const viewItem = (id: String) => {
      router.push(`/item/${id}`);
    }

    return (
      <div className="w-64 bg-white shadow-lg rounded-lg text-center flex flex-col h-full">
        
        <div className="p-4">
          <img
            src={item.image}
            alt={item.name ?? ""}
            className="w-24 mx-auto"
          />
    
          <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
          <p className="text-gray-600">$12.90</p>
    
          <span className={`${item.active ? 'bg-green-100 text-green-700': 'bg-red-100 text-red-700'} text-sm px-3 py-1 rounded-full mt-2 inline-block`}>
              {item.active ? "Active" : "Inactive"}
          </span>
        </div>
        <div className="flex-grow"></div>
  
        <div className="grid grid-cols-2 border-t border-gray-200">
          <button className="text-red-500 font-semibold py-3 border-r border-gray-200 w-full">
            Remove
          </button>
          <button onClick={()=>viewItem(item.id)} className="text-black font-semibold py-3 w-full">View</button>
        </div>
      </div>
    );
  }
  