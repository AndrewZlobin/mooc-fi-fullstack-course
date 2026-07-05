const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    const Header = (props) => {
        return (
            <div>
                <h1>{props.course.name}</h1>
            </div>
        )
    }

    const Content = (props) => {
        const {parts} = props.course;

        return (
            <div>
                {parts.map((part, index) => <Part key={index} part={part} />)}
            </div>
        )
    }

    const Part = (props) => {
        const {name, exercises} = props.part;

        return (
            <p>{name} {exercises}</p>
        )
    }

    const Total = (props) => {
        const sum = props.course.parts.reduce((sum, part) => sum + part.exercises, 0);
        return (
            <div>
                <p>Number of exercises {sum}</p>
            </div>
        )
    }

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Total course={course} />
        </div>
    )
}

export default App