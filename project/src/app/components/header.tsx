"use client";
import styles from "./header.module.css";

interface Nav {
    name: string
    url: string
    isActive: boolean
}

export default function Header(props: { navigations: Nav[] }) {
    const { navigations } = props
    return(
        <nav>
            <div className={`flex flex-row ${styles.navigation} items-center content-center`}>
                <img src='/vercel.svg' className={`h-4 w-auto mr-6`} alt=''/>
                
                {(navigations || []).map((item, _index)=>
                    <a href={item.url} className={`pointer`}>
                        <span className={`${item.isActive ? styles.active : ""}`}>
                            {item.name}
                        </span> 
                    </a>
                )}
            </div>
        </nav>
    )
}