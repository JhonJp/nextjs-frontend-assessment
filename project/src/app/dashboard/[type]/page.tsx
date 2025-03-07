"use client";
import useSWR from 'swr';
import DashboardList from '@/app/components/dashboard/list';
import DashboardCard from '@/app/components/dashboard/card';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function DashboardType({ params }: { params: { type: string } }){

    const { type } = params;
    const { data, error } = useSWR('/api/product', fetcher);

    if (error) return <p className="text-red-500">Failed to load data.</p>;

    return(
        <>
            {type?.toLowerCase() === "list" ? <DashboardList data={data ?? []} /> : <DashboardCard products={data ?? []} />}
        </>
    )
}