import Input from "../Input"

const RadioInputField = (props) => {
    return (
        <div className={props.containerClassName}>
            <Input value={props.value} className={`mr-2 appearance-none focus:outline-none w-4 h-4 p-0! border-2 border-blue-300 rounded-[50%] checked:border-blue-600 checked:bg-blue-500`} id={props.id} name={props.name} checked={props.checked} type="radio" />
            <label for={props.for} >{props.label}</label>
        </div>
    )
}

export default RadioInputField