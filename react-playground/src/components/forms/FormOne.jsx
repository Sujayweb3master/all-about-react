import { useState } from 'react';
import Button from '../ui/Button'
import Input from '../ui/Input';
import RadioInputField from '../ui/forms/RadioInputField';
import CheckboxInputField from '../ui/forms/CheckboxInputField';

const FormOne = () => {

    const [name, setName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState({
        male: false,
        female: true,
        other: false
    })
    const [education, setEducation] = useState({
        sslc: false,
        twelfth: false,
        graduate: false,
        postGraduate: false
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

    const handleFatherNameChange = (e) => {
        setFatherName(e.target.value)
    }

    const handleGenderChange = (e) => {

        if (!e.target.id) return;

        setGender({
            male: false,
            female: false,
            other: false,
            [e.target.id]: e.target.checked,
        })
    }

    const handleEducationChange = (e) => {
        if (!e.target.id) return;

        setEducation(prev => ({
            ...prev,
            [e.target.id]: e.target.checked
        }))
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
                        <label for='father-name' className='mr-4'>Enter Father's Name</label>
                        <Input value={fatherName} id={'father-name'} onChange={handleFatherNameChange} />

                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <label for='age' className='mr-4'>Enter Age</label>
                        <Input value={age} id={'age'} onChange={handleAgeChange} type='number' max={100} className={``} />
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <p className='mr-4'>Gender</p>
                        <div className='flex gap-2' onClick={handleGenderChange}>
                            <RadioInputField value={'Male'} for='male' label='Male' id={'male'} name='gender' checked={gender.male} containerClassName={`flex items-center`} />
                            <RadioInputField value={'FEMALE'} for='female' label='Female' id={'female'} name='gender' checked={gender.female} containerClassName={`flex items-center`} />
                            <RadioInputField value={'OTHER'} for='other' label='Other' id={'other'} name='gender' checked={gender.other} containerClassName={`flex items-center`} />
                        </div>
                    </div>

                    <div onChange={handleEducationChange} className='flex flex-col gap-1'>
                        <p className='mr-4'>Education</p>
                        <CheckboxInputField for="sslc" label='SSLC' id={'sslc'} name='education' checked={education.sslc} />
                        <CheckboxInputField for="twelfth" label='12th Grade' id={'twelfth'} name='education' checked={education.twelfth} />
                        <CheckboxInputField id={'graduate'} name='education' checked={education.graduate} for='graduate' label='Graduate' />
                        <CheckboxInputField id={'postGraduate'} name='education' checked={education.postGraduate} for="postGraduate" label='Post Graduate' />
                    </div>

                </div>
                <Button onClick={handleOnClick} label='Submit' className={`mt-2`} />
            </form>
        </div>
    )
}

export default FormOne