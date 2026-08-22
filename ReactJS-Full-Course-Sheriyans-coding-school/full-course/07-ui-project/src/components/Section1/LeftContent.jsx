

import Arrow from './Arrow'
import HeroText from './HeroText'

const LeftContent = () => {
    return (
        <div className="h-full flex flex-col justify-between w-[28%]  ">
            <HeroText />
            <Arrow />
        </div>
    )
}

export default LeftContent