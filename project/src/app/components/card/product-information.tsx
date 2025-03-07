"use client";
import { ProductInterface } from "@/app/interfaces/product";

export function ProductInfo(props: { product: ProductInterface }) {
    const { product } = props;
    return (
      <div className="flex items-center space-x-4 p-4">
        {/* Product Image */}
        <div className="w-16 h-16">
          <img src={product.image} alt={product.name} width={64} height={64} className="rounded-lg" />
        </div>
  
        {/* Product Details */}
        <div>
          <h2 className="text-lg font-semibold">{product.name}</h2>
          <p className="text-gray-500">{product.brand}</p>
        </div>
      </div>
    );
}

export function ProductMoreDetails(props: { product: ProductInterface }) {
    const { product } = props;
    return(
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-2">Product Information</h2>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                <p><span className="font-semibold">Brand:</span> {product.brand}</p>
                <p><span className="font-semibold">Model Name:</span> {product.model}</p>
                <p><span className="font-semibold">Color:</span> {product.color}</p>
                <p><span className="font-semibold">Category:</span> {product.category}</p>
            </div>
            <h3 className="font-semibold mt-4">About</h3>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>
        </div>
    )
}
