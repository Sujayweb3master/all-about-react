import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between  bg-cyan-900'>
            <h2 className='text-2xl font-bold pl-4'>Welcome To React Route Tutorial</h2>
            <div className='flex gap-8'>
                <Link className='text-md block font-medium hover:underline  p-4' to={'/'}>Home</Link>
                <Link className='text-md block font-medium hover:underline  p-4' to={'/product'}>Product</Link>
                <Link className='text-md block font-medium hover:underline  p-4' to={'/course-details'}>Courses</Link>
                <Link className='text-md block font-medium hover:underline  p-4' to={'/about'}>About</Link>
            </div>
        </div>
    )
}

export default Navbar