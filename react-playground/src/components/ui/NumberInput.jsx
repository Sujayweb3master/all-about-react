import Input from "./Input"

const NumberInput = (props) => {
    return (
        <div className='flex h-7.5'>
            <button className='flex items-center px-3 pb-1 mr-2 rounded bg-amber-200 text-black text-[18px] font-bold hover:cursor-pointer active:scale-90' type="button" onClick={props.handleStepDown}>-</button>
            <Input value={props.value} id={props.id} onChange={props.onNumberInputChange} type='number' min={props.min ?? null} max={props.max ?? null} className={`[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`} />
            <button className='flex items-center px-3 pb-1 ml-2 rounded bg-amber-200 text-black text-[18px] font-bold hover:cursor-pointer active:scale-90' type="button" onClick={props.handleStepUp}>+</button>
        </div>
    )
}

export default NumberInput