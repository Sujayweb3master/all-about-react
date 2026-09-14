
const Input = ({ value, id, onChange, ...props }) => {
    return (
        <input onChange={onChange} {...props} {...(props.value ? { value: value } : null)} id={id} type={props.type || 'text'} className={`border rounded border-[#666] focus:outline-hidden focus:border focus:border-[#999] px-2 py-0.5 ${props.className || ''}`}></input>
    )
}

export default Input