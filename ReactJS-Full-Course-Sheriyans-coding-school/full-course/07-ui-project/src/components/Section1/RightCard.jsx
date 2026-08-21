import { ArrowRight } from 'lucide-react'


const RightCard = () => {
    return (
        <div className='h-full w-80 overflow-hidden relative rounded-4xl'>
            <img src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D" className="h-full object-cover" />
            <div className="absolute top-0 left-0 h-full w-full  p-9 flex flex-col justify-between">
                <h2 className='rounded-[50%] w-12 h-12 p-4 bg-white flex items-center justify-center font-bold text-2xl'>1</h2>
                <div className='text-[#f0f0f0]'>
                    <p className='text-lg leading-6 mb-10 pr-9'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate quisquam doloremque? Accusantium, quas recusandae!</p>
                    <div className='flex items-center justify-between'>
                        <button type="button" className='bg-blue-500 text-white font-medium text-lg px-7 py-3 rounded-full '>Satisfied</button>
                        <button type="button" className='bg-blue-500 text-white font-medium text-lg rounded-full p-4  '>
                            <ArrowRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightCard