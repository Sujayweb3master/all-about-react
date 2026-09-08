import Button from '../ui/Button'

const FormOne = () => {

    const handleOnClick = (e) => {
        e.preventDefault();
    }

    return (

        <div>
            <form className='border border-[#666] rounded p-4'>
                <div className='mb-2'>
                    <label for='name' className='mr-1'>Enter Name</label>
                    <input id='name' className='border rounded border-[#666] focus:outline-hidden focus:border focus:border-[#999]'></input>
                </div>
                <Button onClick={handleOnClick} />
            </form>
        </div>
    )
}

export default FormOne