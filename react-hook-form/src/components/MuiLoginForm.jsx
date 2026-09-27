import { Button, Stack, TextField } from '@mui/material'
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import { useEffect } from 'react'

const MUILoginForm = () => {

    const form = useForm({
        defaultValues: {
            email: '',
            password: ''
        },
    })
    const { register, handleSubmit, control, formState } = form;
    const { errors } = formState;

    useEffect(() => {
        console.log(errors);
    }, [errors])


    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <h1>Login</h1>
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Stack spacing={2} sx={{ width: '400px' }}>
                    <TextField size='small' label="Email" type='email' {...register('email', {
                        required: "Email is required",
                        pattern: {
                            message: 'Enter a valid email',
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
                        }
                    })} error={!!errors.email} helperText={errors.email?.message} />
                    <TextField size='small' label='Password' type='password' {...register('password', {
                        required: "Password is required"
                    })} error={!!errors.password} helperText={errors.password?.message} />
                    <Button type='submit' variant='contained' color='primary'>
                        Login
                    </Button>
                </Stack>
            </form>
            <DevTool control={control} />
        </>
    )
}

export default MUILoginForm