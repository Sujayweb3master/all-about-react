import RightCard from "./RightCard"

const RightContent = (props) => {
    return (
        <div id='right-content' className="h-full w-[72%] p-6 flex flex-nowrap gap-10 overflow-x-auto">
            {props.users.map((user, idx) => {

                return (
                    <RightCard key={idx} imgSrc={user.image} tag={user.tag} intro={user.intro} idx={idx + 1} color={user.color} />
                )
            })}

        </div>
    )
}

export default RightContent