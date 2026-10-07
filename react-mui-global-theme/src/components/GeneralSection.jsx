
const GeneralSection = ({ children, heading, ...props }) => {
    return (
        <section className='section-box'>
            <h2>{heading}</h2>
            {children}
        </section>
    )
}

export default GeneralSection