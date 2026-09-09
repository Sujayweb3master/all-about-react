import Input from '../Input'

const CheckboxInputField = (props) => {
    return (
        <div className={`flex gap-2 items-center hover:cursor-pointer **:hover:cursor-pointer ${props.containerClassName || ''}`} >
            <Input type='checkbox' id={props.id} name={props.name} checked={props.checked} className={`appearance-none focus:border-blue-300 w-4 h-4 p-0! border-2 border-blue-300 rounded checked:border-blue-600 checked:bg-blue-500 ${props.inputClassName}`} />
            <label for={props.for} className='pl-1'>{props.label}</label>
        </div>
    )
}

export default CheckboxInputField