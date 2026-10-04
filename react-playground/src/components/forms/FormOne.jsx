import { useState } from 'react';
import Button from '../ui/Button'
import Input from '../ui/Input';
import RadioInputField from '../ui/forms/RadioInputField';
import CheckboxInputField from '../ui/forms/CheckboxInputField';
import NumberInput from '../ui/NumberInput';

const FormOne = () => {

    const [name, setName] = useState('')
    const [emailId, setEmailId] = useState('')
    const [password, setPassword] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [age, setAge] = useState('0')
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

    const handleEmailChange = (e) => {
        setEmailId(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleAgeChange = (e) => {

        if (e.target.value === null || e.target.value === undefined) return
        if (parseInt(e.target.value) > 100) {
            setAge('100')
            return
        } else if (parseInt(e.target.value) < 0) {
            setAge('0')
            return
        }
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

    const handleStepUp = (e) => {
        e.stopPropagation();
        if (parseInt(age) >= 100) {
            setAge('100')
            return
        }
        setAge(prev => {

            return String(parseInt(prev) + 1)
        })
    }

    const handleStepDown = (e) => {
        e.stopPropagation();
        if (age <= 0) {
            setAge('0')
            return
        }
        setAge(prev => String(parseInt(prev) - 1))
    }

    return (

        <div>
            <form className='border border-[#666] rounded p-4' onSubmit={handleSubmit}>
                <div className='flex flex-col gap-6 mb-4'>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <label htmlFor='name' className='mr-4'>Enter Name</label>
                        <Input value={name} id={'name'} onChange={handleNameChange} />
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <label htmlFor='email-id' className='mr-4'>Enter Email</label>
                        <Input value={emailId} id='email-id' type='email' onChange={handleEmailChange} />
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <label htmlFor='password' className='mr-4'>Enter Password</label>
                        <Input value={password} id='password' type='password' onChange={handlePasswordChange} />
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <label htmlFor='father-name' className='mr-4'>Enter Father's Name</label>
                        <Input value={fatherName} id={'father-name'} onChange={handleFatherNameChange} />
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <label htmlFor='age' className='mr-4'>Enter Age</label>
                        <NumberInput id='age' value={age} handleStepDown={handleStepDown} onNumberInputChange={handleAgeChange} handleStepUp={handleStepUp} />
                    </div>
                    <div className='flex flex-col max-w-100 gap-1'>
                        <p className='mr-4'>Gender</p>
                        <div className='flex gap-2' >
                            <RadioInputField onChange={handleGenderChange} value={'Male'} htmlFor='male' label='Male' id={'male'} name='gender' checked={gender.male} containerClassName={`flex items-center`} />
                            <RadioInputField onChange={handleGenderChange} value={'FEMALE'} htmlFor='female' label='Female' id={'female'} name='gender' checked={gender.female} containerClassName={`flex items-center`} />
                            <RadioInputField onChange={handleGenderChange} value={'OTHER'} htmlFor='other' label='Other' id={'other'} name='gender' checked={gender.other} containerClassName={`flex items-center`} />
                        </div>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='mr-4'>Education</p>
                        <CheckboxInputField onChange={handleEducationChange} htmlFor="sslc" label='SSLC' id={'sslc'} name='education' checked={education.sslc} />
                        <CheckboxInputField onChange={handleEducationChange} htmlFor="twelfth" label='12th Grade' id={'twelfth'} name='education' checked={education.twelfth} />
                        <CheckboxInputField onChange={handleEducationChange} id={'graduate'} name='education' checked={education.graduate} htmlFor='graduate' label='Graduate' />
                        <CheckboxInputField onChange={handleEducationChange} id={'postGraduate'} name='education' checked={education.postGraduate} htmlFor="postGraduate" label='Post Graduate' />
                    </div>

                </div>
                <Button onClick={handleOnClick} label='Submit' className={`mt-2`} />
            </form>
        </div>
    )
}

export default FormOne