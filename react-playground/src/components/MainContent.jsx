import Sidebar from './Sidebar'

const MainContent = ({ children }) => {
    return (
        <div className="flex overflow-y-auto flex-1">
            <Sidebar />
            {children}
        </div>
    )
}

export default MainContent