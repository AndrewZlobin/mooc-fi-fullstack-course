const App = () => {
    const course = 'Half Stack application development'
    const parts = [
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

    const Header = (props) => {
        return (
            <div>
                <h1>{props.course}</h1>
            </div>
        )
    }

    const Part = (props) => {
        const {name, exercises} = props.part;
        return (
            <p>{name} {exercises}</p>
        )
    }

    const Content = (props) => {
        const {parts} = props;

        return (
            <div>
                {parts.map((part, index) => <Part key={index} part={part} />)}
            </div>
        )
    }

    const Total = () => {
        const sum = parts.reduce((sum, part) => sum + part.exercises, 0);
        return (
            <div>
                <p>Number of exercises {sum}</p>
            </div>
        )
    }

    return (
        <div>
            <Header course={course} />
            <Content parts={parts} />
            <Total parts={parts} />
        </div>
    )
}

export default App