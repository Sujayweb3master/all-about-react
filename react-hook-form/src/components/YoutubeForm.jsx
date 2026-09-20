import { DevTool } from '@hookform/devtools';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';

let RenderCount = 0;

const YoutubeForm = () => {
    // console.trace('YoutubeForm render', RenderCount + 1)
    const form = useForm({
        defaultValues: {
            username: "superman",
            email: "",
            channel: "",
            social: {
                twitter: "",
                facebook: ""
            },
            phoneNumbers: ["", ""],
            phNumbers: [{
                number: ""
            }],
            age: 0,
            dob: new Date()
        },
        mode: 'onTouched'
        // async () => {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        //     const data = await response.json();
        //     return {
        //         username: "superman",
        //         email: data.email,
        //         channel: ""
        //     }
    })
    const { register, control, handleSubmit, formState, watch, getValues, setValue, reset } = form;
    const { errors, touchedFields, dirtyFields, isDirty, isValid, isSubmitting, isSubmitted, isSubmitSuccessful, submitCount, } = formState;
    const { fields, append, remove } = useFieldArray({
        name: 'phNumbers',
        control: control
    })

    // Form submission states
    console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount, errors });

    // useful form states 
    // console.log({ touchedFields, dirtyFields, isDirty, isValid })

    const handleGetValues = () => {
        console.log(getValues(['username', 'email']))
    }

    const handleSetValue = () => {
        setValue('username', '', {
            shouldValidate: true,
            shouldTouch: true,
            shouldDirty: true
        })
    }

    const onError = (errors) => {
        console.log('Form errors', errors);

    }

    const onSubmit = (data) => {
        console.log('Form submitted with data:', data);

    }

    // const watchUserName = watch(['username', 'email'])
    // const watchForm = watch();

    // useEffect(() => {
    //     const subscription = watch((value) => {
    //         console.log(value);

    //     })
    //     return () => subscription.unsubscribe();
    //     //     // console.log(watch('username'));

    // }, [watch])

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset()
        }
    }, [isSubmitSuccessful, reset])

    RenderCount++

    return (
        <div>
            <h1>YouTube Form ({RenderCount})</h1>
            {/* <h2>Watched value: {JSON.stringify(watchForm)}</h2> */}

            <form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
                <div className='form-control'>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" {...register('username', {
                        required: {
                            value: true,
                            message: 'Username is required'
                        },
                        // validation : function value for single custom validation rule.
                        validate: (fieldValue) => {
                            return fieldValue !== 'admin' || 'Please enter a different username'
                        }
                    })} />
                    <p className='error'>{errors.username?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register('email', {
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email format'
                        },
                        // validation : object value for multiple custom validation rules.
                        validate: {
                            notAdmin: (fieldValue) => {
                                return fieldValue !== 'admin@example.com' || 'Enter a different email address'
                            },
                            notBlackListed: (fieldValue) => {
                                return !fieldValue.endsWith('baddomain.com') || 'This domain is not supported'
                            },
                            emailAvailable: async (fieldValue) => {
                                const response = await fetch(`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`)
                                const data = await response.json()

                                return data.length === 0 || "Email already exists"
                            }
                        }
                    })} />
                    <p className='error'>{errors.email?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" {...register('channel', {
                        required: {
                            value: true,
                            message: 'Channel is required'
                        }
                    })} />
                    <p className='error'>{errors.channel?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="twitter">Twitter</label>
                    <input type="text" id="twitter" {...register('social.twitter', {
                        disabled: watch('channel') === '',
                        required: {
                            value: true,
                            message: 'Twitter handle is required'
                        }
                    })} />
                    <p className='error'>{errors.social?.twitter?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="facebook">Facebook</label>
                    <input type="text" id="facebook" {...register('social.facebook', {
                        required: {
                            value: true,
                            message: 'Facebook handle is required'
                        }
                    })} />
                    <p className='error'>{errors.social?.facebook?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="primary-phone">Primary phone number</label>
                    <input type="text" id="primary-phone" {...register('phoneNumbers.0', {
                        required: {
                            value: true,
                            message: 'Primary phone number is required'
                        }
                    })} />
                    <p className='error'>{errors.phoneNumbers?.[0]?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="secondary-phone">Secondary phone number</label>
                    <input type="text" id="secondary-phone" {...register('phoneNumbers.1')} />
                </div>

                <div>
                    <label>List of phone numbers</label>
                    <div>
                        {fields.map((field, index) => {
                            return (
                                <>
                                    <div className='form-control' key={field.id}>
                                        <input type='text' {...register(`phNumbers.${index}.number`)} />
                                        {
                                            index > 0 && (
                                                <button type="button" onClick={() => remove(index)}>Remove</button>
                                            )
                                        }
                                    </div>
                                </>
                            )
                        }
                        )}
                        <button type="button" onClick={() => append({ number: "" })}>Add phone number</button>
                    </div>
                </div>

                <div className='form-control'>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" {...register('age', {
                        valueAsNumber: true
                    })} />
                    <p className='error'>{errors.age?.message}</p>
                </div>

                <div className='form-control'>
                    <label htmlFor="dob">Date of birth</label>
                    <input type="date" id="dob" {...register('dob', {
                        valueAsDate: true,
                        required: {
                            value: true,
                            message: 'Date of birth is required'
                        }
                    })} />
                    <p className='error'>{errors.dob?.message}</p>
                </div>

                <button disabled={!isDirty || isSubmitting} >Submit</button>
                <button type="button" onClick={() => reset()}>Reset Form</button>
                <button type="button" onClick={handleGetValues}>Get Values</button>
                <button type="button" onClick={handleSetValue}>Set Value</button>
            </form>
            {/* <DevTool control={control} /> */}
        </div>
    )
}

export default YoutubeForm