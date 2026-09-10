import HeaderNav from "./HeaderNav"

const Header = () => {
    return (
        <header className="flex w-full p-8 text-[#ffffff] bg-blue-400 justify-between items-center flex-1">
            <h1 className="text-4xl">Home</h1>
            <HeaderNav />
        </header>
    )
}

export default Header