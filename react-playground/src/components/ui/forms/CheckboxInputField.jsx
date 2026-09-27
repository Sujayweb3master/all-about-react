import Input from '../Input'

const CheckboxInputField = ({ id, name, containerClassName, label, for: htmlFor, checked: isChecked, inputClassName, ...props }) => {
    return (
        <div className={`flex gap-2 items-center hover:cursor-pointer **:hover:cursor-pointer ${containerClassName || ''}`} >
            <Input type='checkbox' id={id} name={name} checked={isChecked} className={`appearance-none focus:border-blue-300 w-4 h-4 p-0! border-2 border-blue-300 rounded checked:border-blue-600 checked:bg-blue-500 ${inputClassName}`} {...props} />
            <label htmlFor={htmlFor} className='pl-1'>{label}</label>
        </div>
    )
}

export default CheckboxInputField