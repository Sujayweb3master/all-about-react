import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools';

const YoutubeForm = () => {
    const form = useForm()
    const { register, control, handleSubmit } = form;

    const onSubmit = (data) => {
        console.log('Form submitted with data:', data);

    }

    return (
        <div>
            <h1>YouTube Form</h1>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" {...register('username', {
                    required: {
                        value: true,
                        message: 'Username is required'
                    }
                })} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" {...register('email', {
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Invalid email format'
                    }
                })} />

                <label htmlFor="channel">Channel</label>
                <input type="text" id="channel" {...register('channel', {
                    required: {
                        value: true,
                        message: 'Channel is required'
                    }
                })} />

                <button>Submit</button>
            </form>
            <DevTool control={control} />
        </div>
    )
}

export default YoutubeForm