
const Navbar = (props) => {
    return (
        <div>
            <p style={{ marginTop: '12px', padding: '8px' }}>{props.theme}</p>
            <button type="button" onClick={() => {
                props.setTheme(prev => {
                    return prev == 'dark' ? 'light' : 'dark';
                })
            }}>Toggle theme</button>
        </div>
    )
}

export default Navbar