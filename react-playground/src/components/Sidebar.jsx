
const Sidebar = () => {
    return (
        <aside className="h-full text-white w-62.5 p-4 bg-[#1b8bf3]" >
            <div>
                <h3 className="text-2xl">Workspace Selector</h3>
            </div>
            <div>
                <nav>
                    <ul className=" flex text-2xl flex-col capitalize">
                        <li>page-1</li>
                        <li>page-2</li>
                        <li>page-3</li>
                    </ul>
                </nav>

            </div>
        </aside>
    )
}

export default Sidebar