import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const App = () => {

  const [data, setData] = useState(null)

  const fetchData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(console.log);
  }



  const getData = () => {
    const index = Math.ceil(Math.random() * 10);
    axios.get(`https://jsonplaceholder.typicode.com/todos/${index}`)
      .then(res => setData(res.data))
  }

  useEffect(() => {
    console.log('started fetching api')
    fetchData()
  }, [])

  return (
    <div>
      <button onClick={getData} type="button"> Get Data</button>
      <div>
        <h3>{data?.title}</h3>
      </div>
    </div>
  )
}

export default App