import FormOne from "../components/forms/FormOne"

const PageOne = () => {
    return (

        // <div className="container text-white p-4 overflow-y-auto scrollbar-thin scrollbar-track-[#333333] hover:scrollbar-thumb-sky-400">
        <div className="container text-white p-4 overflow-y-auto custom-scrollbar hover:scrollbar-thumb">
            <h1 className="text-2xl mb-4">Fill up the form</h1>
            <FormOne />
        </div >
    )
}

export default PageOne