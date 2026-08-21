import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Section1Content = () => {
    return (
        <div className="py-3 px-18 flex justify-between items-center h-[90vh] gap-4 ">
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default Section1Content