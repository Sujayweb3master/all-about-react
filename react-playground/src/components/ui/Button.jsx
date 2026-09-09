
const Button = ({ label = 'Button', ...props }) => {
    return (
        <button onClick={props.onClick} className={`px-5 py-2.5 font-medium hover:cursor-pointer active:scale-90 rounded bg-amber-300 text-black ${props.className}`}>{label}</button>
    )
}

export default Button