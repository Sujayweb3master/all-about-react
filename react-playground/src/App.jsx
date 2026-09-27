import PageTwo from "./pages/PageTwo"
import HomeLayout from "./layouts/HomeLayout"
import { Outlet } from "react-router"

const App = () => {
  return (
    <>
      <HomeLayout>
        {/* <PageTwo /> */}
        <Outlet />
      </HomeLayout>
    </>
  )
}

export default App