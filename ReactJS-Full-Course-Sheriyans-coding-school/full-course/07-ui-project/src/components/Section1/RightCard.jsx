import RightCardContent from "./RightCardContent"

const RightCard = (props) => {
    return (
        <div className='h-full w-80  overflow-hidden shrink-0  relative rounded-4xl'>
            <img src={props.imgSrc} className="h-full object-cover" alt="working professional" />
            <RightCardContent tag={props.tag} intro={props.intro} id={props.idx} color={props.color} />
        </div>
    )
}

export default RightCard