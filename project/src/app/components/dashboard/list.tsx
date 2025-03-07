"use client";
import Header from "../header";
import Table from "../table";
import styles from "./list.module.css";
import AddBTN from "../button";
import { ProductInterface } from "@/app/interfaces/product";

export default function DashboardList(props: { data: ProductInterface[] }) {
    const { data } = props;
    const navigations = [
        {
            name: "Dashboard",
            url: "#",
            isActive: true
        },{
            name: "Browse",
            url: "#",
            isActive: false
        },{
            name: "Cart",
            url: "#",
            isActive: false
        }
    ]

    const tableHeaders = [{
        label: "Name"
    },{
        label: "Seller"
    },{
        label: "Status"
    },{
        label: "Price"
    },{
        label: ""
    }]
    
    return(
        <div className={`w-screen h-screen`}>
            <div className={`${styles.wrapper}`}>
                <div className={`${styles.flayer} w-auto bg-red-400`}>
                    <Header navigations={navigations} />
                    <h3 className={`${styles.breadcrumb} my-10`}>Dashboard</h3>
                </div>
                <div className="h-auto w-auto">
                    <div className={`${styles.floater} m-6 p-8`}>
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <span className="font-bold">Favorites</span>
                                <p>A list of your favorite items to keep track of.</p>
                            </div>
                            <AddBTN />
                        </div>                        
                        <Table header={tableHeaders} data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}