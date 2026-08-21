import Section1 from "./components/Section1/Section1"
import Section2 from "./components/Section2/Section2"

const App = () => {

  const users = [
    { image: 'https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', intro: 'Prime customers that have access to bank credit and are satisfied with the current product', color: 'blue', tag: 'Satisfied' },
    { image: 'https://images.unsplash.com/photo-1600275669283-4bf2bb8a990c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', intro: 'Prime customers that have access to bank credit and are satisfied with the current product', color: 'blue', tag: 'Underserved' },
    { image: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', intro: 'Prime customers that have access to bank credit and are satisfied with the current product', color: 'green', tag: 'Underbanked' },
    { image: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', intro: 'Prime customers that have access to bank credit and are satisfied with the current product', color: 'green', tag: 'Underbanked' },
    { image: 'https://plus.unsplash.com/premium_photo-1658506656752-4f1b1c1d5916?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D', intro: 'Prime customers that have access to bank credit and are satisfied with the current product', color: 'blue', tag: 'Underbanked' }


  ]

  return (
    <div >
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App