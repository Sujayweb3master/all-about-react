import { useNavigate } from 'react-router'

const Navbar2 = () => {
    const navigate = useNavigate()

    const BtnClickHandler1 = () => {
        navigate('/')
    }

    const BtnClickHandler2 = () => {
        navigate(-1)
    }

    const BtnClickHandler3 = () => {
        navigate(+1)
    }

    return (
        <div className='py-2 px-5 bg-cyan-800'>
            <button className="font-semibold bg-red-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-95" type="button" onClick={BtnClickHandler1}>Return to Home Page</button>
            <button className="font-semibold bg-red-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-95" type="button" onClick={BtnClickHandler2}>Back</button>
            <button className="font-semibold bg-red-700 px-5 py-2 rounded m-2 cursor-pointer active:scale-95" type="button" onClick={BtnClickHandler3}>Next</button>
        </div>
    )
}

export default Navbar2