import Card from "./components/Card"

const App = () => {

  const user = 'Sujay';
  const description = 'lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quidem, similique assumenda.'

  return (
    <div className="parent">
      <Card user={user} description={description} />

    </div>
  )
}

export default App