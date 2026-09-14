
const Button = ({ label = 'Button', onClick, className, ...props }) => {
    return (
        <button onClick={onClick} className={`px-5 py-2.5 font-medium hover:cursor-pointer active:scale-90 rounded bg-amber-300 text-black ${className}`} {...props} >{label}</button>
    )
}

export default Button