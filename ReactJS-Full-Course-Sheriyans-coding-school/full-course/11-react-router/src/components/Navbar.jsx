import { Link } from 'react-router'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h2>Welcome To Route Tutorial</h2>
            <div>
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
            </div>
        </div>
    )
}

export default Navbar