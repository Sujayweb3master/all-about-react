import NavListItem from "./NavListItem"

const HeaderNav = () => {
    return (
        <div>
            <nav>
                <ul className="flex text-lg font-medium leading-3 gap-4 items-center text-[#444444] capitalize">
                    <NavListItem label='page-1' />
                    <NavListItem label='page-2' />
                    <NavListItem label='page-3' />
                </ul>
            </nav>

        </div>
    )
}

export default HeaderNav