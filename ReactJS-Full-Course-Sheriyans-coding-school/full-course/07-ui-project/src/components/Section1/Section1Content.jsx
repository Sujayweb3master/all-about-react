import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Section1Content = (props) => {
    console.log(props)
    return (
        <div className="pb-16 pt-6 px-18 flex justify-between items-center h-[90vh] gap-4 ">
            <LeftContent />
            <RightContent users={props.users} />
        </div>
    )
}

export default Section1Content