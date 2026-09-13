import FormOne from "./forms/FormOne"

const PageTwo = () => {
    return (
        <div className="container text-white p-4 overflow-y-auto scrollbar-thin scrollbar-track-[#333333] hover:scrollbar-thumb-sky-400">
            <h1 className="text-2xl mb-4">Fill up the form</h1>
            <FormOne />
        </div>
    )
}

export default PageTwo