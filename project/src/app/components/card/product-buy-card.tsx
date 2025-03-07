"use client";
import { ProductInterface } from "@/app/interfaces/product";

export default function BuyNowCard(props: { product: ProductInterface }) {
  const { product } = props;

  const convertPrice = (price: string): number => {
    return Number(String(price).replaceAll(",",""))
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-80 border">
      <h2 className="font-bold text-lg">Buy new:</h2>
      <p className="text-2xl font-bold">{convertPrice(product.price).toLocaleString()}
          <span className="text-sm font-normal">{String(convertPrice(product.price).toFixed(2)).split('.')[1]}</span></p>
      <p className="text-sm text-gray-600">
        <span className="text-yellow-500 font-semibold">✔ prime</span> Same-Day
      </p>
      <p className="text-blue-500 text-sm">FREE Returns ▼</p>
      <p className="text-sm mt-2">
        FREE delivery <span className="font-bold">Today 2 PM - 6 PM</span>
      </p>
      <p className="text-sm text-gray-600">
        Order within <span className="text-green-600 font-semibold">1 hr 15 mins</span>
      </p>
      <p className="text-blue-500 text-sm cursor-pointer">📍 Deliver to Tom Cook</p>
      <p className="text-green-600 font-semibold text-lg mt-2">In Stock</p>
      <div className="flex items-center mt-3">
        <label className="text-sm font-semibold">Qty:</label>
        <select className="ml-2 border rounded px-2 py-1 text-sm">
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <button className="mt-3 w-full bg-gray-800 text-white py-2 rounded-lg">Add to Cart</button>
      <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg">Buy Now</button>
    </div>
  );
}
