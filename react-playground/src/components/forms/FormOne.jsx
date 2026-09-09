import { useState } from 'react';
import Button from '../ui/Button'
import Input from '../ui/Input';

const FormOne = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState({
        male: false,
        female: true,
        other: false
    })

    const handleOnClick = (e) => {
        console.log(e);
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value)
    }

    const handleGenderChange = (e) => {

        setGender({
            male: false,
            female: false,
            other: false,
            [e.target.id]: e.target.checked,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);

    }
    return (

        <div>
            <form className='border border-[#666] rounded p-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-6 mb-4'>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <label for='name' className='mr-4'>Enter Name</label>
                        <Input value={name} id={'name'} onChange={handleNameChange} />
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <label for='age' className='mr-4'>Enter Age</label>
                        <Input value={age} id={'age'} onChange={handleAgeChange} type='number' />
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <p className='mr-4'>Gender</p>
                        <div className='flex gap-2' onChange={handleGenderChange}>
                            <div>
                                <label for='male' className='mr-2'>Male</label>
                                <Input value={'MALE'} id={'male'} name='gender' checked={gender.male} type="radio" />
                            </div>
                            <div>
                                <label for='female' className='mr-2'>Female</label>
                                <Input value={'FEMALE'} id={'female'} name='gender' checked={gender.female} type="radio" />
                            </div>
                            <div>
                                <label for='other' className='mr-2'>Other</label>
                                <Input value={'OTHER'} id={'other'} name='gender' checked={gender.other} type="radio" />
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <label for='destination' className='mr-4'>Enter Destination 1234</label>
                        <Input value={name} id={'destination'} onChange={handleNameChange} />

                    </div>


                </div>
                <Button onClick={handleOnClick} label='Submit' />
            </form>
        </div>
    )
}

export default FormOne