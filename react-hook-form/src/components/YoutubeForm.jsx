import { useForm, useFieldArray } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

const YoutubeForm = () => {
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
            }]
        }
        // async () => {
        //     const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
        //     const data = await response.json();
        //     return {
        //         username: "superman",
        //         email: data.email,
        //         channel: ""
        //     }
    })
    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const { fields, append, remove } = useFieldArray({
        name: 'phNumbers',
        control: control
    })

    const onSubmit = (data) => {
        console.log('Form submitted with data:', data);

    }

    return (
        <div>
            <h1>YouTube Form</h1>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
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
                    {/* <p className='error'>{errors.channel?.message}</p> */}
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

                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default YoutubeForm