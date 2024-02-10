export default function ListTile() {
    return (
        <div className="flex w-full items-center justify-between p-5 shadow-sm shadow-gray-400 rounded-xl">
           <div className="flex flex-col">
                <h2>Nome do cliente e empresa</h2>
                <p className="text-sm text-tertiary-color">data</p>
           </div>
           <button className="border border-black px-3 py-2 rounded-lg text-sm">Default</button>
        </div>
    )
}