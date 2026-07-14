const Filter = ({setFilter}) => (
    <div>
        filter shown with: <input onChange={() => setFilter(event.target.value)}/>
    </div>
)

export default Filter;