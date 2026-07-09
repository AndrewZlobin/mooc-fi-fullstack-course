const Total = ({parts}) => {
    return (
        <div>total of {parts.reduce((acc, curr) => acc + curr.exercises, 0)} exercises</div>
    )
}

export default Total;
