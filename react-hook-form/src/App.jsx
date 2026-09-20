import './App.css'
import YoutubeForm from './components/YoutubeForm'

let appRenderCount = 0;
function App() {
  appRenderCount++;
  console.log('App render', appRenderCount);

  return (
    <>
      <YoutubeForm />
      {/* <p> Render Count - ({renderCount})</p> */}
    </>
  )
}

export default App