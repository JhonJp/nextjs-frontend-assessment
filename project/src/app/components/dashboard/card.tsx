"use client";
import { ProductInterface } from "@/app/interfaces/product";
import Sidebar from "../sidebar";
import ProductCard from "../card/product";

export default function DashboardCard(props: { products: ProductInterface[] }) {
    const { products } = props
    return(
        <div className="flex flex-row w-screen h-screen">
            <Sidebar />
            <div className="p-6 bg-gray-100 min-h-screenflex-auto p-6 bg-gray-100 min-h-screen w-screen">
            <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                    <ProductCard key={index} item={product} />
                ))}
            </div>
            </div>
        </div>
    )
}