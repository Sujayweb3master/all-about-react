import { Link, Outlet } from "react-router"

const ProductLayout = () => {
    return (
        <div>
            {/* <h1>ProductLayout</h1> */}
            <div className="flex items-center justify-center gap-10 py-4">
                <Link to={'men'} >Men's Collection</Link>
                <Link to={'women'} >Women's Collection</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default ProductLayout