
const Button = (props) => {
    return (
        <button onClick={props.onClick} className="px-5 py-2.5 active:scale-90 rounded bg-amber-300 text-black">Button</button>
    )
}

export default Button