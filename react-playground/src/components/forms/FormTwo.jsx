import Button from '../ui/Button';
import { useForm } from "react-hook-form"
import Input from '../ui/Input';

const FormTwo = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        // e.preventDefault();
        console.log(data);
    }

    console.log(watch(['exampleRequired'], { exampleRequired: 'something' }))

    return (

        <div>
            <form className='border border-[#666] rounded p-4' onSubmit={handleSubmit(onSubmit)}>

                <div className='flex flex-col gap-4 '>
                    <div className='flex flex-col max-w-100 gap-1'>

                        <Input defaultValue={'John'} {...register('name')} />
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>

                        <Input {...register('exampleRequired', { required: true })} placeholder='Enter any example' type='text' />
                    </div>

                    {errors.exampleRequired && <span>This field is required</span>}
                </div>

                <Button label='Submit' className={`mt-2`} type='submit' />
            </form>
        </div>
    )
}

export default FormTwo