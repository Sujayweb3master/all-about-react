
const Card = (props) => {
    console.log(props)
    return (
        <div className='card'>
            <img src="https://plus.unsplash.com/premium_photo-1786191693710-84f4c911d613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" alt="profile pic" />
            <h1> Sujay </h1>
            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quidem, similique assumenda iste deserunt facilis? Doloremque, sapiente nesciunt quasi.</p>
            <button type="button"> View Profile</button>
        </div>
    )
}

export default Card