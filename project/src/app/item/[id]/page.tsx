"use client";
import useSWR from "swr";
import { ProductInfo, ProductMoreDetails } from "@/app/components/card/product-information";
import Sidebar from "@/app/components/sidebar";
import BuyNowCard from "@/app/components/card/product-buy-card";

const fetcher = async (url: string) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch");
    return res.json();
};

export default function ProductDetails({ params }: { params: { id: string } }) {
    const { data, error } = useSWR(params.id ? `/api/${params.id}` : null, fetcher);

    if (error) return <p className="text-red-500">Error loading product</p>;

    return (
        <div className="flex flex-row w-screen h-screen">
            <Sidebar />
            <div className="p-6 bg-gray-100 min-h-screen w-screen">
                <ProductInfo product={data ?? ""} />
                <div className="flex flex-row gap-4 my-4">
                    <ProductMoreDetails product={data ?? ""} />
                    <BuyNowCard product={data ?? ""} />
                </div>
            </div>
        </div>
    );
}
