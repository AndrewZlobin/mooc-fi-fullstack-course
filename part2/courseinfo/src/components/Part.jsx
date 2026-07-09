const Part = ({part}) => {
    const {name, exercises} = part;
    return (
        <p>
            <span>{name}</span>
            <span> </span>
            <span>{exercises}</span>
        </p>
    )
}

export default Part;