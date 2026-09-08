import Footer from "../components/Footer"
import Header from "../components/Header"
import MainContent from "../components/MainContent"

const HomeLayout = ({ children }) => {

    return (
        <>
            <main className="h-full bg-[#333333]">
                <Header />
                <MainContent children={children} />
                <Footer />
            </main>
        </>
    )
}

export default HomeLayout