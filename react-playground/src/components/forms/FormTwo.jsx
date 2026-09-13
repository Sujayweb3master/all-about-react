import Button from '../ui/Button';

const FormTwo = () => {



    const handleOnClick = (e) => {
        console.log(e);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (

        <div>
            <form className='border border-[#666] rounded p-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-6 mb-4'>

                </div>
                <Button onClick={handleOnClick} label='Submit' className={`mt-2`} />
            </form>
        </div>
    )
}

export default FormTwo