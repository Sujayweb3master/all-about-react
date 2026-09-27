import Input from "../Input"

const RadioInputField = ({ containerClassName, value, inputClassName, id, name, checked: isChecked, for: htmlFor, label, ...props }) => {
    return (
        <div className={`hover:cursor-pointer **:hover:cursor-pointer ${containerClassName || ''}`}>
            <Input value={value} className={` inline-block appearance-none focus:outline-none w-4 h-4 p-0! border-2 border-blue-300 rounded-[50%] checked:border-blue-600 checked:bg-blue-500 ${inputClassName || ''}`} id={id} name={name} checked={isChecked} type="radio" {...props} />
            <label className="pl-2" htmlFor={htmlFor} >{label}</label>
        </div>
    )
}

export default RadioInputField