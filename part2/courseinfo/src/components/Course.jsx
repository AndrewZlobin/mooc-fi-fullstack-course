import Header from "./Header.jsx";
import Content from "./Content.jsx";

const Course = ({course}) => {
    const {id, name, parts} = course;
    return (
        <div>
            <Header key={id} name={name} />
            <Content parts={parts} />
        </div>
    )
}

export default Course;