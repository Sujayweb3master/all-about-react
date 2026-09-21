import './App.css';
import { ZodYouTubeForm } from './components/ZodYoutubeForm';

let appRenderCount = 0;
function App() {
  appRenderCount++;
  console.log('App render', appRenderCount);

  return (
    <>
      <ZodYouTubeForm />
      {/* <p> Render Count - ({renderCount})</p> */}
    </>
  )
}

export default App