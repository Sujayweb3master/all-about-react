
const Input = ({ value, id, onChange, ...props }) => {
    return (
        <input value={value} onChange={onChange} id={id} type={props.type || 'text'} {...props} className='border rounded border-[#666] focus:outline-hidden focus:border focus:border-[#999] px-2 py-0.5'></input>
    )
}

export default Input