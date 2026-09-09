
const NavListItem = ({ label = 'Nav label', ...props }) => {
    return (
        <li className={`px-5 rounded-[5px] py-3 bg-[#95d7fd] active:scale-90 border-[#3a799e] cursor-pointer ${props.customClassName}`}>{label}</li>
    )
}

export default NavListItem