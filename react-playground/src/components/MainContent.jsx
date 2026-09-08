import Sidebar from './Sidebar'

const MainContent = ({ children }) => {
    return (
        <div className="h-[80%] flex">
            <Sidebar />
            {children}
        </div>
    )
}

export default MainContent