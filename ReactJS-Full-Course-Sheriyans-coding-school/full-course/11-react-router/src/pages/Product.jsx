import { Link, Outlet } from "react-router"

const Product = () => {
    return (
        <div>
            {/* <h1>Product</h1> */}
            <div className="flex items-center justify-center gap-10 py-4">
                <Link to={'men'} >Men's Collection</Link>
                <Link to={'women'} >Women's Collection</Link>
            </div>
            <Outlet />
        </div>
    )
}

export default Product