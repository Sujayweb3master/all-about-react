import { useEffect, useRef } from 'react';
import { useForm } from "react-hook-form";
import Input from '../ui/Input';

const FormThree = () => {
    const { register, handleSubmit, unregister } = useForm();
    const ref = useRef();

    const onSubmit = data => console.log(data);

    // useEffect(() => {
    //     register({ name: "customRegister" }, { required: true });

    //     return () => unregister("customRegister"); // unregister input after component unmount
    // }, [register, unregister])

    useEffect(() => {
        console.log(ref)
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="text" name="firstName" />
            <input type="text" name="lastName" /> */}
            <Input ref={ref} />
            {/* <button type="button" onClick={() => unregister("lastName")}>unregister</button> */}
            <input type="submit" />
        </form>
    );
}

export default FormThree