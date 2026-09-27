import Sidebar from './Sidebar'

const MainContent = ({ children }) => {
    return (
        <div className="flex overflow-y-auto flex-1 text-white">
            <Sidebar />
            {children}
        </div>
    )
}

export default MainContent