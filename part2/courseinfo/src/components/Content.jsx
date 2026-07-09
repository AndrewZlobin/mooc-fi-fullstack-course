import Part from "./Part.jsx";

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(({id, ...part}) =>
                <Part key={id} part={part} />
            )}
        </div>
    )
}

export default Content;