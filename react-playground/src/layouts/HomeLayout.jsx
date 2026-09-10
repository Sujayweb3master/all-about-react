import Footer from "../components/Footer"
import Header from "../components/Header"
import MainContent from "../components/MainContent"

const HomeLayout = ({ children }) => {

    return (
        <>
            <main className="h-[100vh] bg-[#333333] flex flex-col">
                <Header />
                <MainContent children={children} />
                <Footer />
            </main>
        </>
    )
}

export default HomeLayout