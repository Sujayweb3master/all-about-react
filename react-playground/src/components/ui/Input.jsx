
const Input = ({ value, id, onChange, className, ...props }) => {

    return (
        <input onChange={onChange} {...props} value={value} id={id} type={props.type || 'text'} className={`border rounded border-[#666] focus:outline-hidden focus:border focus:border-[#999] px-2 py-0.5 ${className || ''}`} />
    )
}

export default Input