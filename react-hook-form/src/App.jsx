// import './App.css';
import MUILoginForm from './components/MUILoginForm';

let appRenderCount = 0;
function App() {
  appRenderCount++;
  // console.log('App render', appRenderCount);

  return (
    <>
      <MUILoginForm />
      {/* <p> Render Count - ({renderCount})</p> */}
    </>
  )
}

export default App