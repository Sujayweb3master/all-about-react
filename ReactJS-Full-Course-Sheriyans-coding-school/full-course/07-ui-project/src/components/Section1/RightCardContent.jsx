import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
    return (
        <div className="absolute bg-black/30 top-0 left-0 h-full w-full  p-9 flex flex-col justify-between">
            <h2 className='rounded-[50%] w-12 h-12 p-4 bg-white flex items-center justify-center font-bold text-2xl'>{props.id}</h2>
            <div className='text-[#f0f0f0]'>
                <p className='text-lg leading-6 mb-10 pr-4'>{props.intro}</p>
                <div className='flex items-center justify-between'>
                    <button type="button" className={`bg-${props.color}-400 text-white font-medium text-lg px-7 py-3 rounded-full`}>{props.tag}</button>
                    <button type="button" className={`bg-${props.color}-400 text-white font-medium text-lg rounded-full p-4`}>
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent