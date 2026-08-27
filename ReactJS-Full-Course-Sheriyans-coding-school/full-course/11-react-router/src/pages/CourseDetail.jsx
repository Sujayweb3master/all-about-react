import { useParams } from "react-router"

const CourseDetail = () => {

    const { courseId, id } = useParams();

    console.log('course:', courseId)
    console.log('id:', id)

    return (
        <div>
            <h1> {courseId} CourseDetail Page</h1>
        </div>
    )
}

export default CourseDetail