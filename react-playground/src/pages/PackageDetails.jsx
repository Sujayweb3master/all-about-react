import { useParams } from "react-router"

const PackageDetails = () => {
    const { pId } = useParams()

    console.log(pId);

    return (
        <div>PackageDetails</div>
    )
}

export default PackageDetails