import Sidebar from './Sidebar'

const MainContent = ({ children }) => {
    return (
        <div className="flex overflow-y-auto">
            <Sidebar />
            {children}
        </div>
    )
}

export default MainContent