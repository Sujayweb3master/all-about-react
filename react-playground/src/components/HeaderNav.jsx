
const HeaderNav = () => {
    return (
        <div>
            <nav>
                <ul className="flex text-lg font-medium leading-3 gap-4 items-center text-[#444444] capitalize">
                    <li className="px-5 rounded-[5px] py-3 bg-[#95d7fd] active:scale-90 border-[#3a799e] cursor-pointer ">page-1</li>
                    <li className="px-5 rounded-[5px] py-3 bg-[#95d7fd] active:scale-90 border-[#3a799e] cursor-pointer ">page-2</li>
                    <li className="px-5 rounded-[5px] py-3 bg-[#95d7fd] active:scale-90 border-[#3a799e] cursor-pointer ">page-3</li>
                </ul>
            </nav>

        </div>
    )
}

export default HeaderNav