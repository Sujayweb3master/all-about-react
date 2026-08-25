import Counter from "./components/Counter"

const App = () => {

  const onchange = (event) => {

    console.log('input is changed', event)
  }


  return (
    <>
      <div>
        <input type="text" onChange={onchange} placeholder="Enter name" />
      </div>
      <Counter />
    </>
  )
}

export default App