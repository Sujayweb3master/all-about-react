import { useState } from "react";

const App = () => {

  const [text, setText] = useState('')

  const submitHandler = (event) => {
    event?.preventDefault();
    console.log('form submitted by: ', text)

  }


  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter your name" value={text} onChange={(e) => {
          setText(e.target.value)
        }} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App