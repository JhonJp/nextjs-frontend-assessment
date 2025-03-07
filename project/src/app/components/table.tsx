import { ProductInterface } from "../interfaces/product"
import { TableHeader } from "../interfaces/table"

export default function Table(props: { data: ProductInterface[], header: TableHeader[]}) {
    const { header, data } = props
    return(
        <table className="table-auto w-full">
            <thead>
                <tr className={`border-b-2 grid grid-cols-[40%_20%_15%_15%_10%] gap-4 py-3 items-start`}>
                    {(header || []).map((item: TableHeader, _index) => <th className="text-left px-4 py-2">{item.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {(data || []).map((item: ProductInterface, _index) => {
                    return(
                        <tr key={`${item.name}-${_index}`} className="border-b-2 grid grid-cols-[40%_20%_15%_15%_10%] gap-4 py-3 items-start">
                            <div className="flex items-center gap-3 px-4 py-2">
                                <img src={item.image ?? ""} alt={item.name} className="w-8 h-8 rounded-full" />
                                {item.name}
                            </div>
                            <div className='px-4 py-2'>{item.seller}</div>
                            <div className='px-4 py-2'>
                                <span className={`${item.active ? 'bg-green-100 text-green-700': 'bg-red-100 text-red-700'} px-2 py-1 rounded-md text-sm`}> {item.active ? "Active" : "Inactive"}</span>
                            </div>
                            <div className='px-4 py-2'> {item.price}</div>
                            <div className='px-4 py-2'>
                                <button className="text-red-500 hover:underline">
                                    Remove
                                </button>
                            </div>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}